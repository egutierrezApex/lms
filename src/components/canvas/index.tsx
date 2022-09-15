import React, { useState } from 'react';
import { IAreaByFigure, ISeat, IWorkStation } from 'types/shared';
import WorkStation from './workStation';
import SeatInfoPopOver from './seatInfoPopOver/seatInfoPopOver';

interface CanvasProps {
	workStations: IWorkStation[];
	selectedSeat?: ISeat;
	onSelectSeat?: (seat: ISeat) => void;
	figures?: IAreaByFigure[];
}

const Canvas: React.FC<CanvasProps> = ({
	workStations,
	selectedSeat,
	onSelectSeat,
	figures,
}) => {
	const [anchorEl, setAnchorEl] = useState<null | SVGRectElement>(null);
	const [hoveredSeat, setHoveredSeat] = useState<ISeat | null>(null);

	const showSeatInfo = (
		event: React.MouseEvent<SVGRectElement>,
		seat: ISeat
	) => {
		if (seat.seatState.name !== 'Available') {
			setHoveredSeat(seat);
			setAnchorEl(event.currentTarget);
		}
	};
	const hideSeatInfo = () => {
		setHoveredSeat(null);
		setAnchorEl(null);
	};

	return (
		<>
			<svg viewBox="0 0 1000 1000">
				{workStations.map((workstation) => (
					<WorkStation
						key={`WorkStation ${workstation.id}`}
						workStation={workstation}
						selectedSeat={selectedSeat}
						onSelectSeat={onSelectSeat}
						showSeatInfo={showSeatInfo}
						hideSeatInfo={hideSeatInfo}
					/>
				))}
				{/* {figures?.map((figure) => (
				<Figure
					key={`Figure ${figure.id}`}
					type={figure.figureName}
					x={figure.}
					y={figure.y}
					width={figure.width}
					height={figure.height}
					rotation={figure.rotation}
					text={figure.text}
				/>
			))} */}
			</svg>
			<SeatInfoPopOver
				anchorEl={anchorEl}
				seat={hoveredSeat}
				onClose={hideSeatInfo}
			/>
		</>
	);
};

export default Canvas;
