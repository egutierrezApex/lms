import React from 'react';
import useStyles from '../sideBar.styles';
import IconMore from 'assets/icons/more-icon.svg';
import IconMoreWhite from 'assets/icons/more-icon-white.svg';

interface SideBarButtonProps {
	id: number;
	text: string;
	isActive?: boolean;
	onClick?: (id: number) => void;
	showOptionsButton?: boolean;
	onOptionsClick?: (id: number) => void;
	customClass?: string;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
	id,
	text,
	isActive,
	onClick,
	showOptionsButton,
	onOptionsClick,
	customClass
}) => {
	const classes = useStyles();
	const noWhiteSpacesName = text.replaceAll(' ', '');
	return (
		<div
			id={`lmsHomeButtonBuilding${id}`}
			className={`${classes.sideBarButton} ${isActive && classes.activeButton} ${customClass}`}
			onClick={() => onClick && onClick(id)}
		>
			{showOptionsButton && (
				<img
					id={`lmsHomeImgBuilding${id}${noWhiteSpacesName}`}
					className={classes.optionsIcon}
					onClick={(e) => {
						onOptionsClick && onOptionsClick(id);
						e.stopPropagation();
					}}
					src={isActive ? IconMoreWhite : IconMore}
					alt="optionsIcon"
				/>
			)}
			<span className={classes.sideBarButtonText}>{text}</span>
		</div>
	);
};

export default React.memo(SideBarButton);
