import React from 'react';

import { Box } from '@material-ui/core';

import UploadImages from './uploadImages/uploadImages';
import { Form } from './form';

const BuildingScreen = () => {
	return (
		<Box display="flex" justifyContent="space-between" mb={2}>
			<Form />
			<UploadImages />
		</Box>
	);
};

export default BuildingScreen;
