import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface Props {
	seatName: string;
	seatConsultantName: string;
	seatStatus: string;
	setSeatName: (name: string) => void;
	setSeatConsultantName: (seat: string) => void;
	setSeatStatus: (status: string) => void;
	setEditWorkStation: (isEdit: boolean) => void;
	setCanvasCreated: (isCanvasCreated: boolean) => void;
	onSave: () => void;
}

function EditWorkstation(props: Props) {
	const {
		seatName,
		seatConsultantName,
		seatStatus,
		setSeatName,
		setSeatConsultantName,
		setSeatStatus,
		setEditWorkStation,
		setCanvasCreated,
		onSave
	} = props;

	return (
		<div className="inputsForm">
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<TextField
						label="Seat Name"
						InputLabelProps={{ shrink: true }}
						placeholder="Name"
						value={seatName}
						onChange={(event) => {
							setSeatName(event.target.value);
						}}
					/>
					<TextField
						label="Assigned Consultant"
						InputLabelProps={{ shrink: true }}
						placeholder="Name"
						value={seatConsultantName}
						onChange={(event) => {
							setSeatConsultantName(event.target.value);
						}}
					/>
				</Grid>

				<Grid item xs={6}>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="assignable"
						name="radio-buttons-group"
						onChange={(event) => {
							setSeatStatus(event.target.value);
						}}
					>
						<FormControlLabel
							checked={seatStatus === 'assignable' || seatStatus === ''}
							value="assignable"
							control={<Radio />}
							label="Assignable"
						/>
						<FormControlLabel
							checked={seatStatus === 'no_available'}
							value="no_available"
							control={<Radio />}
							label="No Available"
						/>
						<FormControlLabel
							checked={seatStatus === 'pool'}
							value="pool"
							control={<Radio />}
							label="Pool"
						/>
					</RadioGroup>
				</Grid>
			</Grid>
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<Button
						size="small"
						variant="contained"
						color="secondary"
						name="cancelRows"
						onClick={() => {
							setEditWorkStation(false);
						}}
					>
						Cancel
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						size="small"
						variant="contained"
						color="secondary"
						name="createRows"
						onClick={() => {
							setEditWorkStation(false);
							setCanvasCreated(true);
							onSave();
						}}
					>
						save
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default EditWorkstation;
