import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import DiscardModal from './components/discardModal';
import SaveModal from './components/saveModal';
import ChangeSeatModal from './components/changeSeatModal';
import { ISeat, IWorkStation, IZone } from 'types/shared';
import EmployeeAssignData from 'components/employee';
import SeatLegend from 'components/seatLegend';
import Canvas from 'components/canvas';
import ZoneSelection from './components/zoneSelection';
import { useSelector } from 'react-redux';
import SeatsApiWrapper from 'utils/apiWrappers/seatsApiWrapper';
import { Navigate } from 'react-router';
import { IRootReducer } from 'types/AppInterfaces';
import WorkStationApiWrapper from 'utils/apiWrappers/workStationApiWrapper';
import Loading from 'components/loading/loading';

const AssignSeatPage: React.FC = () => {
	const selectedEmployee = useSelector(
		(state: IRootReducer) => state.employees.selectedEmployee
	);
	const [openDiscardModal, setOpenDiscardModal] = useState(false);
	const [openSaveModal, setOpenSaveModal] = useState(false);
	const [openchangeSeatModal, setOpenchangeSeatModal] = useState(false);
	const [employeeSeat, setEmployeeSeat] = useState<ISeat | undefined>();
	const [currentEmployeeSeat, setCurrentEmployeeSeat] = useState<ISeat | undefined>();
	const [zoneSeats, setZoneSeats] = useState<ISeat[]>([]);
	const [employeeSeats, setEmployeeSeats] = useState<ISeat[]>([]);

	const [selectedSeat, setSelectedSeat] = useState<ISeat | undefined>();
	const [selectedZone, setSelectedZone] = useState<IZone | undefined>();
	const [workStations, setWorkStations] = useState<IWorkStation[]>([]);
	const [loading, setloading] = useState(true);

	const classes = useStyles();

	useEffect(() => {
		setloading(true);
		setEmployeeSeat(undefined);
		if (selectedEmployee) {
			SeatsApiWrapper.getEmployeeSeats(selectedEmployee.id).then((seat) => {
				setEmployeeSeat(seat[0]);
				setEmployeeSeats(seat);
				setloading(false);
			});
		}
	}, [selectedEmployee]);

	useEffect(() => {
		setWorkStations([]);
		setZoneSeats([]);
		setSelectedSeat(undefined);

		if (selectedZone) {
			WorkStationApiWrapper.getWorkStationsByZone(selectedZone.id).then(
				(workStations) => {
					setWorkStations(workStations);
					const workStationsSeats: ISeat[] = [];
					workStations.map((workStation) => 
						workStationsSeats.push(...workStation.seats)
					);
					setZoneSeats(workStationsSeats);
			    }
			);
		}
	}, [selectedZone, setWorkStations, setZoneSeats, setSelectedSeat]);

	if (!selectedEmployee) return <Navigate to="/" />;

	function modalUp() {
		if (!employeeSeats.length) {
			setOpenSaveModal(true);
		} else {
			const searchEmployeBuild = employeeSeats.find(
				(seat) => seat.buildingId === selectedSeat?.buildingId
			);
			if (searchEmployeBuild) {
				setCurrentEmployeeSeat(searchEmployeBuild);
				setOpenchangeSeatModal(true);
			} else {
				setOpenSaveModal(true);
			}
		}
	}

	if(loading) return <Loading />;

	return (
		<>
			<Grid className={classes.grid} container justifyContent="flex-end">
				<Grid className={classes.userGrid} item xs sm={4} md={3}>
					<EmployeeAssignData employee={selectedEmployee} seat={employeeSeat} />
				</Grid>
				<Grid item xs sm={8} md={9}>
					<Grid className={classes.canvasGrid} container>
						<Grid className={classes.column} item md>
							<Grid item xs className={classes.dropDown}>
								<ZoneSelection
									startBuildingId={employeeSeat?.buildingId}
									startFloorId={employeeSeat?.floorId}
									startZoneId={employeeSeat?.zoneId}
									selectedZone={selectedZone}
									setSelectedZone={setSelectedZone}
								/>
							</Grid>
							<Grid className={classes.seatLegend} item xs>
								<SeatLegend 
								seats={zoneSeats} 
								showSelectedBox 
								selected={Boolean(selectedSeat)} 
							/>
							</Grid>
						</Grid>

						<Grid item md={8} xs={12}>
							<Canvas
								workStations={workStations}
								selectedSeat={selectedSeat}
								onSelectSeat={setSelectedSeat}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid className={classes.buttonGrid} item>
					<Button
						className={classes.buttons}
						type="submit"
						variant="outlined"
						color="secondary"
						onClick={() => setOpenDiscardModal(true)}
					>
						Discard
					</Button>
					<Button
						className={classes.buttons}
						type="submit"
						variant="contained"
						color="secondary"
						disabled={!selectedSeat}
						onClick={() => {
							modalUp();
						}}
					>
						Save
					</Button>
				</Grid>
			</Grid>
			<DiscardModal
				fullName={selectedEmployee.fullName}
				isOpen={openDiscardModal}
				onClose={() => setOpenDiscardModal(false)}
				onDiscard={() => setSelectedSeat(undefined)}
			/>
			{selectedSeat && (
				<SaveModal
					selectedEmployee={selectedEmployee}
					selectedSeat={selectedSeat}
					isOpen={openSaveModal}
					onClose={() => setOpenSaveModal(false)}
				/>
			)}
			{selectedSeat && (
				<ChangeSeatModal
					selectedEmployee={selectedEmployee}
					selectedSeat={selectedSeat}
					isOpen={openchangeSeatModal}
					employeeCurrentSeat={currentEmployeeSeat!}
					onClose={() => setOpenchangeSeatModal(false)}
				/>
			)}
		</>
	);
};

export default AssignSeatPage;
