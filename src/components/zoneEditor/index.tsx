import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField } from '@material-ui/core';
import DrawMenuContainer from '../../containers/dev/draw-menu';
import useStyles from './styles';
import DropDownList from '../dropdown-list/dropdown-list';
import InputNumber from '../inputNumber/index';

interface CanvasProps {
	width: number;
	height: number;
}

const ZoneEditor = () => {
	const [areaType, setAreaType] = useState('Rectangle');
	const handleAreaTypeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAreaType(event.target.value as string);
	};
	const areaTypes = ['Rectangle', 'Circle', 'Polygon'];
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const [positionX, setPositionX] = useState(0);
	const [positionY, setPositionY] = useState(0);
	const classes = useStyles();

	const canvas = useRef<HTMLCanvasElement>(null);

	// initialize the canvas context
	useEffect(() => {
		let ctx = null;
		// dynamically assign the width and height to canvas
		const canvasEle: HTMLCanvasElement | null = canvas.current;
		if (canvasEle) {
			canvasEle.width = canvasEle.clientWidth;
			canvasEle.height = canvasEle.clientHeight;
			// get context of the canvas
			ctx = canvasEle.getContext('2d');
			if (ctx) {
				ctx.fillStyle = '#EE9F2D';
				ctx.fillRect(5, 5, 200, canvasEle.height - 10);
			}
		}
	}, []);

	function onFiguresClick() {
		console.log('Zones figures click');
	}

	function onSaveClick() {
		console.log('Zones save click');
	}

	function onEditClick() {
		console.log('Zones edit click');
	}

	function onDeleteClick() {
		console.log('Zones delete click');
	}

	return (
		<div>
			<Box className={classes.optionsBox}>
				<TextField label="Name" InputLabelProps={{ shrink: true }} placeholder="Name" />

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
					InputLabelProps={{ shrink: true }}
				/>
			</Box>
			<div className={classes.canvasContainer}>
				<div className="yAxisLabels">
					<span>{positionY}</span>
					<span>Y</span>
				</div>
				<div className="content">
					<div className="dashedAxis">
						<canvas ref={canvas}></canvas>
					</div>
					<div className="xAxisLabels">
						<span>0</span>
						<span>X</span>
						<span>{positionX}</span>
					</div>
					<div className="spaces">
						<span className="square orange"></span>Selected
						<span className="square"></span>Available
					</div>
				</div>
			</div>
			<DrawMenuContainer
				onFiguresClick={onFiguresClick}
				onEditClick={onEditClick}
				onDeleteClick={onDeleteClick}
				onSaveClick={onSaveClick}
			/>
		</div>
	);
};

export default ZoneEditor;
