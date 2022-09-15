import { Box, Button } from '@material-ui/core';
import { itemProps } from 'components/form/select';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectBuilding } from 'redux/buildings/actions';
import { BuildingRequestData } from 'redux/buildings/types';
import { showTabs } from 'redux/home/home.action';
import { IRootReducer } from 'types/AppInterfaces';
import { IBuilding } from 'types/shared';
import BuildingsApiWrapper from 'utils/apiWrappers/buildingsApiWrapper';
import LocationsApiWrapper from 'utils/apiWrappers/locationsApiWrapper';
import colors from 'utils/colors';
import { FieldGenerator } from 'utils/forms/fieldGenerator';
import { SaveModal } from '../saveModal';
import { fields, FieldValues } from './fields';

export const Form = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [formData, setFormData] = React.useState<FieldValues | undefined>();
	const activeBuilding = useSelector((state: IRootReducer) => state.buildings.active);
	const [fieldValues, setFieldValues] = React.useState(fields);
	const dispatch = useDispatch();
	const isNew = activeBuilding === undefined;

	const { control, handleSubmit, reset } = useForm<FieldValues, object>();

	useEffect(() => {
		if (!isNew) {
			const {
				name,
				shortName,
				countryId,
				stateId,
				cityId,
				phoneNumber1,
				phoneNumber2,
				phoneNumber3,
				description,
				address
			} = activeBuilding as IBuilding;
			reset({
				name,
				shortName,
				phoneNumber1,
				phoneNumber2,
				phoneNumber3,
				description,
				address,
				isDraft: false,
				country: Number(countryId),
				state: Number(stateId),
				city: Number(cityId)
			});
		} else {
			reset({
				name: '',
				shortName: '',
				phoneNumber1: '',
				phoneNumber2: '',
				phoneNumber3: '',
				description: '',
				address: '',
				isDraft: false,
				country: 0,
				state: 0,
				city: 0
			});
		}
	}, [isNew, activeBuilding, reset]);

	const getCountries = async () => {
		const countries = (await LocationsApiWrapper.getCountries()) as itemProps[];
		const state = { ...fieldValues };
		state['country']['items'] = countries;
		setFieldValues(state);
	};

	const getStates = async () => {
		const states = (await LocationsApiWrapper.getStates()) as itemProps[];
		const state = { ...fieldValues };
		state['state']['items'] = states;
		setFieldValues(state);
	};

	const getCities = async () => {
		const cities = (await LocationsApiWrapper.getCities()) as itemProps[];
		const state = { ...fieldValues };
		state['city']['items'] = cities;
		setFieldValues(state);
	};

	useEffect(() => {
		getCountries();
		getStates();
		getCities();
	}, []);

	const onCloseModal = () => {
		setIsOpen(false);
	};

	const onOpenModal = (data: FieldValues) => {
		setFormData(data);
		setIsOpen(true);
	};

	const onSubmit = async () => {
		if (isNew) {
			const active = await BuildingsApiWrapper.postBuilding(formatData());
			dispatch(selectBuilding(active));
		} else {
			BuildingsApiWrapper.putBuilding(formatData());
		}
	};

	const formatData = (): BuildingRequestData => {
		if (!formData) return {} as BuildingRequestData;
		return {
			...formData,
			id: activeBuilding?.id,
			cityId: formData?.city || 0,
			stateId: formData?.state || 0,
			countryId: formData?.country || 0
		};
	};

	const handleCancel = () => {
		dispatch(showTabs(false));
	};

	return (
		<Box
			minHeight={'800px'}
			width={'calc(24% - 6px)'}
			border={'solid 3px'}
			borderRadius={'0 0 20px 20px'}
			bgcolor={colors.apexBlueLighter}
			borderColor={colors.apexOrange2}
		>
			<SaveModal isOpen={isOpen} onClose={onCloseModal} onSubmit={onSubmit} />
			<form onSubmit={handleSubmit(onOpenModal)}>
				{Object.keys(fieldValues).map((value, index) => (
					<Box px={3} pb={2.5} textAlign={'start'} key={index}>
						<FieldGenerator fields={fieldValues} value={value} control={control} key={index} />
					</Box>
				))}
				<Box textAlign={'end'} p={2}>
					<Box paddingRight={2} display={'inline'}>
						<Button id="lmsBuildingsCancelButton" variant="outlined" color="secondary" onClick={handleCancel}>
							Cancel
						</Button>
					</Box>
					<Button id="lmsBuildingsSubmitButton" type="submit" variant="contained" color="secondary">
						Submit
					</Button>
				</Box>
			</form>
		</Box>
	);
};
