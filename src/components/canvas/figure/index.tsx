import React from 'react';

interface FigureProps {
	type?: string;
	x: number;
	y: number;
	width: number;
	height: number;
	rotation?: number;
	text?: string;
}

export const Figure: React.FC<FigureProps> = ({
	type = 'rectangle',
	x,
	y,
	width,
	height,
	rotation = 0,
	text,
}) => {
	return (
		<g transform={`translate(${x},${y}) rotate(${rotation})`}>
			{type === 'circle' ? (
				<circle cx={width / 2} cy={height / 2} r={width / 2} fill="#F8FAFD" />
			) : (
				<rect width={width} height={height} rx="10" fill="#F8FAFD" />
			)}
			{text && (
				<text
					x={width / 2}
					y={height / 2}
					dominantBaseline="middle"
					textAnchor="middle"
					fill={'#B3B3B4'}
					fontSize="32"
				>
					{text}
				</text>
			)}
		</g>
	);
};
