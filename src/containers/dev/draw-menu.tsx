import React, { useState } from 'react';
import DrawMenu from '../../components/draw-menu/draw-menu';
import { DrawMenuOptions, IDrawOptionsBase } from '../../types/AppInterfaces';

const DrawMenuContainer = (props: IDrawOptionsBase) => {
	const {
		onFiguresClick,
		onWorkstationsClick,
		onFurnitureClick,
		onEditClick,
		onSaveClick,
		onDeleteClick
	} = props;
	const [selectedItem, setSelectedItem] = useState(DrawMenuOptions.Figures);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'flex-end',
				height: '700px',
				position: 'absolute',
				right: 15,
				top: 90
			}}
		>
			<DrawMenu
				selected={selectedItem}
				onFiguresClick={() => {
					setSelectedItem(DrawMenuOptions.Figures);
					onFiguresClick();
				}}
				onWorkstationsClick={ onWorkstationsClick && function () {
					setSelectedItem(DrawMenuOptions.Workstations);
					onWorkstationsClick();
				}}
				onFurnitureClick={ onFurnitureClick && function () {
					setSelectedItem(DrawMenuOptions.Furniture);
					onFurnitureClick();
				}}
				onEditClick={() => {
					setSelectedItem(DrawMenuOptions.Edit);
					onEditClick();
				}}
				onDeleteClick={() => {
					setSelectedItem(DrawMenuOptions.Delete);
					onDeleteClick();
				}}
				onSaveClick={() => {
					setSelectedItem(DrawMenuOptions.Save);
					onSaveClick();
				}}
			/>
		</div>
	);
};
export default DrawMenuContainer;
