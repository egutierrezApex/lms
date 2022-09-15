import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, TextField } from '@material-ui/core';
import useStyles from './styles';
import DropDownList from 'components/dropdown-list/dropdown-list';
import InputNumber from 'components/inputNumber';
import FloorEditor from './components/FloorEditor';
import colors from 'utils/colors';
import { IRootReducer } from 'types/AppInterfaces';
import { useSelector } from 'react-redux';
import DrawMenuContainer from '../../containers/dev/draw-menu';

type Coordinate = {
	x: number;
	y: number;
};

const FloorScreen = () => {
	const activeFloor = useSelector((state: IRootReducer) => state.floors.selected);
	const [areaType, setAreaType] = useState('Rectangle');
	const handleAreaTypeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAreaType(event.target.value as string);
	};

	const areaTypes = ['Rectangle', 'Circle', 'Polygon'];
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);
	const [floorName, setFloorName] = useState('');
	const [floorDescription, setFloorDescription] = useState(activeFloor?.description);

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const classes = useStyles();

	const [initialPoint, setInitialPoint] = useState<Coordinate>({ x: 0, y: 0 });
	const [mouseDown, setMouseDown] = useState(false);

	function onFiguresClick() {
		console.log('Floor figures click');
	}

	function onSaveClick() {
		console.log('Floor save click');
	}

	function onEditClick() {
		console.log('Floor edit click');
	}

	function onDeleteClick() {
		console.log('Floor delete click');
	}

	const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
		if (!canvasRef.current) {
			return;
		}
		const canvas: HTMLCanvasElement = canvasRef.current;
		return {
			x: event.pageX - canvas.offsetLeft,
			y: event.pageY - canvas.offsetTop
		};
	};

	useEffect(() => {
		if (activeFloor === undefined) {
			setPositionY(0);
			setPositionX(0);
			setFloorName('');
			setFloorDescription('');
			setHeight(0);
			setWidth(0);
		}else{
			setHeight(activeFloor.areaByFigure.height);
			setWidth(activeFloor.areaByFigure.width);
			setPositionY(activeFloor.y);
			setPositionX(activeFloor.x);
			setFloorName(activeFloor.name);
			activeFloor.description === null ? setFloorDescription('') : setFloorDescription(activeFloor.description);
		}
	}, [activeFloor]);

	const handleMouseDown = useCallback(
		(event: MouseEvent) => {
			const coordinates = getCoordinates(event);
			if (coordinates) {
				setMouseDown(true);
				setInitialPoint(coordinates);
				setPositionX(coordinates.x);
				setPositionY(coordinates.y);
			}
		},
		[getCoordinates]
	);

	useEffect(() => {
		if (!canvasRef.current) {
			return;
		}
		const canvas: HTMLCanvasElement = canvasRef.current;
		canvas.addEventListener('mousedown', handleMouseDown);
		return () => {
			canvas.removeEventListener('mousedown', handleMouseDown);
		};
	}, [handleMouseDown]);

	const handleMouseUp = useCallback(() => {
		setMouseDown(false);
	}, []);

	useEffect(() => {
		if (!canvasRef.current) {
			return;
		}
		const canvas: HTMLCanvasElement = canvasRef.current;
		canvas.addEventListener('mouseup', handleMouseUp);
		canvas.addEventListener('mouseleave', handleMouseUp);
		return () => {
			canvas.removeEventListener('mouseup', handleMouseUp);
			canvas.removeEventListener('mouseleave', handleMouseUp);
		};
	}, [handleMouseUp]);

	const paint = (initialPoint: Coordinate, finalPoint: Coordinate) => {
		if (!canvasRef.current) {
			return;
		}
		const canvas: HTMLCanvasElement = canvasRef.current;
		const context = canvas.getContext('2d');
		if (context) {
			context.clearRect(0, 0, canvas.width, canvas.height); //clear canvas

			context.beginPath();
			let width = finalPoint.x - initialPoint.x;
			let height = finalPoint.y - initialPoint.y;
			setWidth(width);
			setHeight(height);

			context.fillRect(initialPoint.x, initialPoint.y, width, height);
			context.fillStyle = colors.apexOrange2;
			context.lineWidth = 1;
			context.closePath();
			context.stroke();
		}
	};

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			if (!canvasRef.current) {
				return;
			}
			if (mouseDown) {
				const finalPoint = getCoordinates(event);
				if (initialPoint && finalPoint) {
					paint(initialPoint, finalPoint);
				}
			}
		},
		[mouseDown, initialPoint]
	);

	useEffect(() => {
		if (!canvasRef.current) {
			return;
		}
		const canvas: HTMLCanvasElement = canvasRef.current;
		canvas.addEventListener('mousemove', handleMouseMove);
		return () => {
			canvas.removeEventListener('mousemove', handleMouseMove);
		};
	}, [handleMouseMove]);

	return (
		<div>
			<Box className={classes.optionsBox}>
				<TextField label="Name"  value={floorName} placeholder="Name" />

				<DropDownList
					name={'areaType'}
					items={areaTypes}
					inputLabel={'Area Type'}
					handleSelect={handleAreaTypeSelect}
					itemSelected={areaType}
				></DropDownList>

				<InputNumber
					name="Height"
					label="Height"
					placeholder="0"
					value={height}
					handleChange={setHeight}
				/>

				<InputNumber
					name="Width"
					label="Width"
					placeholder="0"
					value={width}
					handleChange={setWidth}
				/>

				<InputNumber
					name="Position X"
					label="Position X"
					placeholder="0"
					value={positionX}
					handleChange={setPositionX}
				/>

				<InputNumber
					name="Position Y"
					label="Position Y"
					placeholder="0"
					value={positionY}
					handleChange={setPositionY}
				/>

				<TextField
					label="Description"
					placeholder="Add a description"
					multiline
					rows={2}
					value= {floorDescription}
				/>
			</Box>
			<FloorEditor canvasRef={canvasRef} />
			<DrawMenuContainer
				onFiguresClick={onFiguresClick}
				onEditClick={onEditClick}
				onDeleteClick={onDeleteClick}
				onSaveClick={onSaveClick}
			/>
		</div>

	);
};

export default FloorScreen;
