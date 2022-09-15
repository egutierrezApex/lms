import React from 'react';
import { Tooltip } from '@material-ui/core';
import { DrawMenuOptions, IDrawMenuProps } from '../../types/AppInterfaces';
import { ReactComponent as SaveIcon } from '../../assets/icons/save.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/remove.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as FiguresIcon } from '../../assets/icons/figures.svg';
import { ReactComponent as WorkstationsIcon } from '../../assets/icons/workstations.svg';
import { ReactComponent as FurnitureIcon } from '../../assets/icons/furniture.svg';
import './draw-menu.styles.scss';

const DrawMenu = (props: IDrawMenuProps) => {
	const {
		selected,
		onFiguresClick,
		onWorkstationsClick,
		onFurnitureClick,
		onEditClick,
		onSaveClick,
		onDeleteClick
	} = props;

	return (
		<div className="draw-menu">
			<div className="draw-menu__top">
				<div
					className={`draw-menu__item ${selected === DrawMenuOptions.Figures ? 'selected' : ''}`}
				>
					<Tooltip arrow title="Figures" placement="left">
						<FiguresIcon onClick={onFiguresClick} />
					</Tooltip>
				</div>

				{onWorkstationsClick && (
					<div
						className={`draw-menu__item ${
							selected === DrawMenuOptions.Workstations ? 'selected' : ''
						}`}
					>
						<Tooltip arrow title="Create workstation" placement="left">
							<WorkstationsIcon onClick={onWorkstationsClick} />
						</Tooltip>
					</div>
				)}

				{onFurnitureClick && (
					<div
						className={`draw-menu__item ${
							selected === DrawMenuOptions.Furniture ? 'selected' : ''
						}`}
					>
						<Tooltip arrow title="Add furniture" placement="left">
							<FurnitureIcon onClick={onFurnitureClick} />
						</Tooltip>
					</div>
				)}
			</div>
			<div className="draw-menu__bottom">
				<div className={`draw-menu__item ${selected === DrawMenuOptions.Edit ? 'selected' : ''}`}>
					<Tooltip arrow title="Edit" placement="left">
						<EditIcon onClick={onEditClick} />
					</Tooltip>
				</div>
				<div className={`draw-menu__item ${selected === DrawMenuOptions.Delete ? 'selected' : ''}`}>
					<Tooltip arrow title="Delete" placement="left">
						<RemoveIcon onClick={onDeleteClick} />
					</Tooltip>
				</div>
				<div className={`draw-menu__item ${selected === DrawMenuOptions.Save ? 'selected' : ''}`}>
					<Tooltip arrow title="Save" placement="left">
						<SaveIcon onClick={onSaveClick} />
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default DrawMenu;
