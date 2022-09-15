import React from 'react';
import Slider from './slider/slider';
import BuildingData from './buildingData';
import { IBuilding } from 'types/shared';
import useStyles from './buildingImages.styles';

interface BuildingImagesProps {
	activeBuilding: IBuilding;
}

const BuildingImages: React.FC<BuildingImagesProps> = ({ activeBuilding }) => {
	const classes = useStyles();
	return (
		<div className={classes.buildingImagesContainer}>
			<div className={classes.carousel}>
				<Slider building={activeBuilding} />
			</div>
			<div className={classes.buildingInfo}>
				<BuildingData building={activeBuilding} />
			</div>
		</div>
	);
};

export default BuildingImages;
