import React from 'react';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import InputNumber from '../../../../components/inputNumber/index';

interface Props {
	numberOfRows: number;
	seatsWidth: number;
	seatsPerRow: number;
	setNumberOfRows: (rows:number) => void;
	setSeatsWidth: (seat:number) => void;
	setSeatsPerRow: (seat:number) => void;
	setModal: (active: boolean) => void;
	setCanvasCreated: (active: boolean) => void;
}

function CreateWorkstation(props: Props) {
	const {
		numberOfRows,
		seatsWidth,
		seatsPerRow,
		setNumberOfRows,
		setSeatsWidth,
		setSeatsPerRow,
		setModal,
		setCanvasCreated
	} = props;

	return (
		<div className="inputsForm">
			<Grid container spacing={4}>
				<Grid item xs={4}>
					<InputNumber
						name="rows"
						label="Number of rows"
						placeholder="0"
						value={numberOfRows}
						handleChange={setNumberOfRows}
					/>
					<InputNumber
						name="seatsWidth"
						label="seats width"
						placeholder=".8"
						value={seatsWidth}
						handleChange={setSeatsWidth}
					/>
				</Grid>

				<Grid item xs={4}>
					<InputNumber
						name="seatsRow"
						label="seats per row"
						placeholder=".8"
						value={seatsPerRow}
						handleChange={setSeatsPerRow}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={4}>
				<Grid item xs={4}>
					<Button
						size="small"
						variant="contained"
						color="secondary"
						name="cancelRows"
						onClick={() => {
							setModal(false);
						}}
					>
						Cancel
					</Button>
				</Grid>
				<Grid item xs={4}>
					<Button
						size="small"
						variant="contained"
						color="secondary"
						name="createRows"
						onClick={() => {
							setModal(false);
							setCanvasCreated(true);
						}}
					>
						create
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default CreateWorkstation;
