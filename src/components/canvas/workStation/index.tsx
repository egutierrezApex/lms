import React from 'react';
import { ISeat, IWorkStation } from 'types/shared';
import { colorsConfig } from 'utils/colors';

interface WorkStationProps {
	workStation: IWorkStation;
	selectedSeat?: ISeat;
	onSelectSeat?: (seat: ISeat) => void;
	showSeatInfo?: (event: React.MouseEvent<SVGRectElement>, seat: ISeat) => void;
	hideSeatInfo?: () => void;
}

const WorkStation: React.FC<WorkStationProps> = ({
	workStation,
	selectedSeat,
	onSelectSeat,
	showSeatInfo,
	hideSeatInfo,
}) => {
	const onSeatClick = (seat: ISeat) => {
		if (onSelectSeat && seat.seatState.id === 1) return onSelectSeat(seat);
	};

	return (
		<g>
			<rect
				x={workStation.x}
				y={workStation.y}
				width={workStation.areaByFigure.width}
				height={workStation.areaByFigure.height}
				rx="10"
				stroke={'#EFF0F2'}
				strokeWidth={3}
				fill={'#F8FAFD'}
			/>
			{workStation.seats.map((seat) => {
				const seatState =
					seat === selectedSeat ? 'Selected' : seat.seatState.name;

				return (
					<rect
						key={seat.id}
						x={seat.x}
						y={seat.y}
						width={seat.areaByFigure?.width}
						height={seat.areaByFigure?.height}
						rx="10"
						fill={colorsConfig[seatState].color}
						onClick={() => onSeatClick(seat)}
						onMouseOver={(event) => showSeatInfo && showSeatInfo(event, seat)}
						onMouseLeave={hideSeatInfo}
						cursor="pointer"
					/>
				);
			})}
		</g>
	);
};

export default WorkStation;
