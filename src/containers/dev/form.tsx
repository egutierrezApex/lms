import { Button, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import NumberInputComponent from '../../components/form/number';
import SelectComponent from '../../components/form/select';
import TextInputComponent from '../../components/form/text';
import TextareaComponent from '../../components/form/textarea';
import CheckboxInput from '../../components/form/checkbox';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

const FormContainer = () => {
	const [formData, setFormData] = useState({
		age: '',
		text: '',
		number: '',
		textarea: '',
		checkbox: false
	});

	const selectItems = [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' }
	];

	const handleInputChange = (
		event: React.ChangeEvent<{ name?: string; value: unknown }>,
		key: string
	) => {
		const { value } = event.target;
		const newData = { ...formData, [key]: value };
		setFormData(newData);
	};
	const handleCheckboxChange = (checked: boolean, key: string) => {
		const newData = { ...formData, [key]: checked };
		setFormData(newData);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		// parse data if necesary
		// validate
		// make a request for this form
	};

	return (
		<>
			<br />
			<br />
			<form onSubmit={handleSubmit} noValidate autoComplete="off" style={{ textAlign: 'left' }}>
				<h1>Form components</h1>
				<div>
					<TextInputComponent
						label="placeholder"
						required
						onChange={(event) => handleInputChange(event, 'text')}
						value={formData.text}
					/>
				</div>
				<br />
				<div>
					<SelectComponent
						label="age"
						name="age"
						required
						value={formData.age}
						items={selectItems}
						onChange={(event) => handleInputChange(event, 'age')}
					/>
				</div>
				<br />
				<div>
					<NumberInputComponent
						required
						handleChange={(event) => handleInputChange(event, 'number')}
						value={formData.number}
					/>
				</div>
				<br />
				<div>
					<TextareaComponent
						required={false}
						onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
							handleInputChange(event, 'textarea')
						}
						value={formData.textarea}
					/>
				</div>
				<div>
					<CheckboxInput
						checked={formData.checkbox}
						label="Label"
						onChange={(event, checked) => handleCheckboxChange(checked, 'checkbox')}
					/>
				</div>
				<br />
				<p>
					<Button fullWidth type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</p>
				<p>
					<Button fullWidth type="submit" variant="outlined" color="primary">
						Submit
					</Button>
				</p>
				<p>
					<Button fullWidth type="submit" variant="contained" color="secondary">
						Submit
					</Button>
				</p>
				<p>
					<Button fullWidth type="submit" variant="outlined" color="secondary">
						Submit
					</Button>
				</p>
				<p>
					<IconButton color="primary">
						<SearchOutlinedIcon />
					</IconButton>
					<IconButton color="primary">
						<EditOutlinedIcon />
					</IconButton>
					<IconButton color="secondary">
						<SaveOutlinedIcon />
					</IconButton>
					<IconButton color="secondary">
						<BackspaceOutlinedIcon />
					</IconButton>
				</p>
			</form>
		</>
	);
};

export default FormContainer;
