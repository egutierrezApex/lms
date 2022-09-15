import React, { useState, useEffect } from 'react';
import { IBuildingData } from 'types/AppInterfaces';
import phoneIcon from 'assets/icons/phone.svg';
import addressIcon from 'assets/icons/address.svg';
import layerIcon from 'assets/icons/layer.svg';
import workIcon from 'assets/icons/work.svg';
import useStyles from './buildingImages.styles';
import { IBuilding } from 'types/shared';
import BuildingsApiWrapper from 'utils/apiWrappers/buildingsApiWrapper';

interface BuildingDataProps {
  building: IBuilding;
}

const BuildingData: React.FC<BuildingDataProps> = ({ building }) => {
	const classes = useStyles();
	const [buildingData, setBuildingData] = useState<IBuildingData>();

	useEffect(() => {
		const fetchBuildingData = async () => {
			const buildingData = await BuildingsApiWrapper.getBuildingData(building);
			setBuildingData(buildingData);
		};

		fetchBuildingData();

	}, [building]);

	if (buildingData) {
		return (
			<>
				<span className={classes.title}>{buildingData.name}</span>
				<div className={classes.iconAndText}>
					<img src={addressIcon} alt="" /> <span>{buildingData.address}</span>
				</div>
				<div className={classes.iconAndText}>
					<img src={phoneIcon} alt="" />
					<span>{buildingData.phoneNumber1}</span>
				</div>
				<hr />
				<div className={classes.seatsWrapper}>
					<div className={classes.iconAndText}>
						<img src={layerIcon} alt="" />
						<span>FLOORS: {buildingData.totalFloors}</span>
					</div>
					<div className={classes.iconAndText}>
						<img src={workIcon} alt="" />
						<span>
							SEATS:{' '}
							{buildingData.totalAvailableSeats + buildingData.totalBusySeats}
						</span>
					</div>
					<span className={`${classes.showMoreButton} ${classes.iconAndText}`}>
						SHOW MORE
					</span>
				</div>
			</>
		);
	}

	return null;
};

export default BuildingData;
