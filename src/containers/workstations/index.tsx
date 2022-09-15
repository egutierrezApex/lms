import React, { useState, useRef, useEffect, EventHandler, useCallback } from 'react';
import { Box, Grid, TextField } from '@material-ui/core';
import useStyles from './style';
import DropDownList from '../../components/dropdown-list/dropdown-list';
import InputNumber from '../../components/inputNumber/index';
import GenericModal from '../../components/modals/generic/modal';
import EditWorkstation from '../../components/modals/workstation/edit';
import CreateWorkstation from '../../components/modals/workstation/create';
import DrawMenuContainer from '../../containers/dev/draw-menu';
import { IWorkStation, IArea, IWorkStationData } from '../../types/AppInterfaces';
import WorkStationApiWrapper from 'utils/apiWrappers/workStationApiWrapper';
import ZonesApiWrapper from 'utils/apiWrappers/zonesApiWrapper';

function WorkstationContainer() {
	const [createModal, setCreateModal] = useState(false);
	const classes = useStyles();
	const [zoneList, setZoneList] = useState<string[]>(['']);
	const [zone, setZone] = useState('Select Zone');
	const [elementType, setElementType] = useState('Rectangular Table');
	const elementTypes = ['Rectangular Table'];
	const [numberOfRows, setNumberOfRows] = useState(2);
	const [seatsPerRow, setSeatsPerRow] = useState(3);
	const [seatsWidth, setSeatsWidth] = useState(5);
	const [canvasCreated, setCanvasCreated] = useState(false);
	const [editWorkStation, setEditWorkStation] = useState(false);
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);
	const [eventListenerAdded, setEventListenerAdded] = useState(false);
	const [value, setValue] = useState<IWorkStation>({
		area: {
			width: 0,
			height: 0
		},
		workstationsData: []
	});
	const [seatName, setSeatName] = useState('');
	const [seatConsultantName, setSeatConsultantName] = useState('');
	const [seatStatus, setSeatStatus] = useState('');

	const ref = useRef<IWorkStation>({
		area: {
			width: 0,
			height: 0
		},
		workstationsData: []
	});

	const positionXRef = useRef(positionX);
	const positionYRef = useRef(positionY);

	const handleAreaTypeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
		console.log('event.target.value', event.target.value)
		setZone(event.target.value as string);
	};
	const canvas = useRef<HTMLCanvasElement>(null);
	const canvasEle: HTMLCanvasElement | null = canvas.current;
	let ctx = canvasEle?.getContext('2d');

	const setWorkStations = async (canvasEle: HTMLCanvasElement) => {
		let rows = numberOfRows;
		let seatsInRow = seatsPerRow;
		let size = seatsWidth * 10;
		let width = size;
		let height = 50 * 1.5;
		let marginx = 0;
		let marginy = 0;
		let workstation: IWorkStation = {
			area: {
				width: 0,
				height: 0
			},
			workstationsData: []
		};

		workstation.area.height = height * seatsInRow;
		workstation.area.width = width * rows;

		for (let sr = 0; sr < seatsInRow; sr++) {
			let y = (canvasEle?.height ?? 100) - (height * seatsInRow + marginy);
			y = y + sr * height;
			for (let r = 0; r < rows; r++) {
				let x = r * width + marginx;
				workstation.workstationsData.push({
					isActive: false,
					lineWidth: 5,
					posX: x + 5 / 2 + positionX,
					posY: y + 5 / 2 - positionY,
					width: width - 5,
					height: height - 5,
					seat: { name: '', consultantName: '', status: '' }
				});
			}
		}
		return workstation;
	};

	const renderCanvas = async (ctx: any, workstations: IWorkStation) => {
		if (ctx && canvasEle) {
			const radius = 5;
			clearCanvas();
			ctx.fillStyle = createModal ? '#EE9F2D' : '#BCBCBE';
			let backgroundHeight = workstations.area.height + 2;
			ctx.fillRect(
				positionXRef.current,
				canvasEle.height - workstations.area.height - 2 - positionYRef.current,
				workstations.area.width + 2,
				backgroundHeight
			);
			workstations.workstationsData.forEach((item: IWorkStationData) => {
				ctx.beginPath();
				ctx.fillStyle = !item.isActive ? '#EFF0F2' : '#EE9F2D';
				ctx.moveTo(item.posX + item.width, item.posY + item.height);
				ctx.arcTo(item.posX, item.posY + item.height, item.posX, item.posY, radius);
				ctx.arcTo(item.posX, item.posY, item.posX + item.width, item.posY, radius);
				ctx.arcTo(
					item.posX + item.width,
					item.posY,
					item.posX + item.width,
					item.posY + item.height,
					radius
				);
				ctx.arcTo(
					item.posX + item.width,
					item.posY + item.height,
					item.posX,
					item.posY + item.height,
					radius
				);
				ctx.fill();
			});
		}
	};

	function onFiguresClick() {
		console.log('Workstation figures click');
	}

	function onWorkstationClick() {
		setCreateModal(!createModal);
	}

	function onFurnitureClick() {
		console.log('Workstation figures click');
	}

	function onSaveClick() {
		console.log('Workstation save click');
	}

	function onEditClick() {
		setCreateModal(!createModal);
	}

	function onDeleteClick() {
		clearCanvas();
		setCanvasCreated(false);
		setValue({
			area: {
				width: 0,
				height: 0
			},
			workstationsData: []
		});
	}

	function onSaveEdit() {
		let workStations: IWorkStationData[] = ref.current.workstationsData;
		let selectedIndex = workStations.findIndex((x) => x.isActive);
		let element = workStations[selectedIndex];
		element.seat = { name: seatName, consultantName: seatConsultantName, status: seatStatus };
		workStations.splice(selectedIndex, 1, element);
		ref.current.workstationsData = workStations;
		setValue(ref.current);
	}

	function clearCanvas() {
		if (ctx && canvasEle) {
			ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
		}
	}

	const AddClick = async (event: any) => {
		if (canvasEle) {
			var xVal = event.pageX - canvasEle.offsetLeft,
				yVal = event.pageY - canvasEle.offsetTop;
			let workStations: IWorkStationData[] = ref.current.workstationsData;
			let selectedIndex = workStations.findIndex((x) => x.isActive);
			if (selectedIndex > -1) {
				let element = workStations[selectedIndex];
				element.isActive = false;
				workStations.splice(selectedIndex, 1, element);
			}
			for (let x = 0; x < ref.current.workstationsData.length; x++) {
				if (
					yVal > ref.current.workstationsData[x].posY &&
					yVal < ref.current.workstationsData[x].posY + ref.current.workstationsData[x].height &&
					xVal > ref.current.workstationsData[x].posX &&
					xVal < ref.current.workstationsData[x].posX + ref.current.workstationsData[x].width
				) {
					let element = workStations[x];
					element.isActive = !element.isActive;
					workStations.splice(x, 1, element);
					ref.current.workstationsData = workStations;
					setSeatName(element.seat.name);
					setSeatConsultantName(element.seat.consultantName);
					setSeatStatus(element.seat.status);
					setValue(ref.current);
					setEditWorkStation(element.isActive);
					break;
				}
			}
			await renderCanvas(ctx, ref.current);
		}
	};

	useEffect(() => {
		if (canvasEle) {
			const setData = async () => {
				const data = await setWorkStations(canvasEle);
				setValue(data);
				await renderCanvas(ctx, data);
			};
			canvasEle.width = canvasEle.clientWidth;
			canvasEle.height = canvasEle.clientHeight;
			if (canvasCreated && !eventListenerAdded) {
				canvasEle?.addEventListener('click', AddClick);
				setEventListenerAdded(true);
			}
			if (createModal || canvasCreated) {
				setData();
			}
		}
	}, [numberOfRows, seatsPerRow, seatsWidth, createModal, positionX, positionY]);

	useEffect(() => {
		ref.current = value;
		positionXRef.current = positionX;
		positionYRef.current = positionY;
	}, [value, positionX, positionY]);

	useEffect(() => {
		ZonesApiWrapper.getZones().then((zonesList) => {
			let getZones:string[] = [];
			zonesList.forEach((item) => {
				getZones.push(item.name);
			});
			setZoneList(getZones);
		});
	},[]);

	const createWorkstationModal = (
		<GenericModal
			title="Create Workstation"
			content={
				<CreateWorkstation
					numberOfRows={numberOfRows}
					seatsWidth={seatsWidth}
					seatsPerRow={seatsPerRow}
					setNumberOfRows={setNumberOfRows}
					setSeatsWidth={setSeatsWidth}
					setSeatsPerRow={setSeatsPerRow}
					setModal={setCreateModal}
					setCanvasCreated={setCanvasCreated}
				></CreateWorkstation>
			}
			isOpen={createModal}
			onClose={() => {
				setCreateModal(false);
			}}
		/>
	);

	const editWorkstationModal = (
		<GenericModal
			title="Edit Workstation"
			content={
				<EditWorkstation
					seatName={seatName}
					seatConsultantName={seatConsultantName}
					seatStatus={seatStatus}
					setSeatName={setSeatName}
					setSeatConsultantName={setSeatConsultantName}
					setSeatStatus={setSeatStatus}
					setEditWorkStation={setEditWorkStation}
					setCanvasCreated={setCanvasCreated}
					onSave={onSaveEdit}
				></EditWorkstation>
			}
			isOpen={editWorkStation}
			onClose={() => {
				setEditWorkStation(false);
			}}
		/>
	);

	return (
		<>
			{createWorkstationModal}
			{editWorkstationModal}
			<Box className={classes.optionsBox}>
				<Grid container direction="row" spacing={1}>
					<Grid item xs={2}>
						<DropDownList
							name={'areaType'}
							items={zoneList}
							inputLabel={'Selected Zones'}
							handleSelect={handleAreaTypeSelect}
							itemSelected={zone}
						></DropDownList>
					</Grid>
					<Grid item xs={2}>
						<DropDownList
							name={'areaType'}
							items={elementTypes}
							inputLabel={'Element Type'}
							handleSelect={handleAreaTypeSelect}
							itemSelected={elementType}
						></DropDownList>
					</Grid>
					<Grid item xs={3}>
						<TextField label="Name" InputLabelProps={{ shrink: true }} placeholder="Name" />
					</Grid>
					<Grid item xs={1}>
						<InputNumber
							name="Position X"
							label="Position X"
							placeholder="0"
							value={positionX}
							handleChange={setPositionX}
						/>
					</Grid>
					<Grid item xs={1}>
						<InputNumber
							name="Position Y"
							label="Position Y"
							placeholder="0"
							value={positionY}
							handleChange={setPositionY}
						/>
					</Grid>
					{canvasCreated && (
						<>
							<Grid item xs={1}>
								<InputNumber
									name="rows"
									label="Number of rows"
									placeholder="0"
									value={numberOfRows}
									handleChange={setNumberOfRows}
								/>
							</Grid>
							<Grid item xs={1}>
								<InputNumber
									name="seatsWidth"
									label="seats width"
									placeholder=".8"
									value={seatsWidth}
									handleChange={setSeatsWidth}
								/>
							</Grid>
							<Grid item xs={1}>
								<InputNumber
									name="seatsRow"
									label="seats per row"
									placeholder=".8"
									value={seatsPerRow}
									handleChange={setSeatsPerRow}
								/>
							</Grid>{' '}
						</>
					)}
				</Grid>
			</Box>
			<div className={classes.canvasContainer}>
				<div className="yAxisLabels">
					<span>N</span>
					<span>Y</span>
				</div>
				<div className="content">
					<div className="dashedAxis">
						<canvas ref={canvas}></canvas>
					</div>
					<div className="xAxisLabels">
						<span>0</span>
						<span>X</span>
						<span>N</span>
					</div>
					<div className="spaces">
						<span className="square orange"></span>Selected
						<span className="square"></span>Available
					</div>
				</div>
			</div>
			<DrawMenuContainer
				onFiguresClick={onFiguresClick}
				onFurnitureClick={onFurnitureClick}
				onWorkstationsClick={onWorkstationClick}
				onEditClick={onEditClick}
				onDeleteClick={onDeleteClick}
				onSaveClick={onSaveClick}
			/>
		</>
	);
}

export default WorkstationContainer;
