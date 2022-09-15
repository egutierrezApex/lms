import React, { RefObject, useCallback, useState } from 'react';
import useStyles from '../styles';

interface FloorEditorProps {
	canvasRef: RefObject<HTMLCanvasElement>;
}

const FloorEditor = ({ canvasRef }: FloorEditorProps) => {
	const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

	const canvasContainer = useCallback((node) => {
		if (node !== null) {
			setCanvasSize({
				width: Math.floor(node.getBoundingClientRect().width - 24),
				height: Math.floor(node.getBoundingClientRect().height)
			});
		}
	}, []);

	const classes = useStyles();

	return (
		<div className={classes.canvasContainer}>
			<div className="yAxisLabels">
				<span>{canvasSize.height}</span>
				<span>Y</span>
			</div>
			<div className="content">
				<div className="dashedAxis" ref={canvasContainer}>
					<canvas ref={canvasRef} height={canvasSize.height} width={canvasSize.width} />;
				</div>
				<div className="xAxisLabels">
					<span>0</span>
					<span>X</span>
					<span>{canvasSize.width}</span>
				</div>
				<div className="spaces">
					<span className="square orange"></span>Selected
					<span className="square"></span>Available
				</div>
			</div>
		</div>
	);
};

export default FloorEditor;
