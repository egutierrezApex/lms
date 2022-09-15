import React from 'react';
import { List } from '@material-ui/core';
import LegendItem from './item';
import { ISeat } from 'types/shared';

interface SeatLegendProps {
	seats: ISeat[];
	showSelectedBox?: boolean;
	selected?: boolean;
}

const SeatLegend: React.FC<SeatLegendProps> = ({
	seats,
	showSelectedBox,
	selected,
}) => {
	const seatTypes = seats.reduce<{
		[key: string]: { name: string; seats: ISeat[] };
	}>((result, seat) => {
		const { seatState } = seat;
		const stateId = `state${seatState.id}`;
		if (!result[stateId]) {
			result[stateId] = { ...seatState, seats: [] };
		}
		result[stateId].seats.push(seat);
		return result;
	}, {});

	return (
		<List dense>
			{showSelectedBox && (
				<LegendItem number={selected ? 1 : 0} label={'Selected'} />
			)}
			{Object.keys(seatTypes).map((seatKey) => {
				const seat = seatTypes[seatKey];
				return (
					<LegendItem
						key={Symbol(seat.name).toString()}
						number={
							seat.name === 'Available' && selected
								? seat.seats.length - 1
								: seat.seats.length
						}
						label={seat.name}
					/>
				);
			})}
			<LegendItem last={true} number={seats.length} label="Total Seats" />
		</List>
	);
};

export default SeatLegend;
