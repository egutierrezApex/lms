import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import styles from './styles';
import UserAvatar from '../avatar';

interface EmployeeListItemProps {
	fullName: string;
	image?: string;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = ({
	fullName,
	image,
}) => {
	const {
		avatarspace,
		employeeitem,
		employeeitemTextRoot,
		employeeitemTextPrimary,
	} = styles();
	return (
		<ListItem button dense className={employeeitem}>
			<ListItemAvatar className={avatarspace}>
				<UserAvatar image={image} fullName={fullName} size="small" />
			</ListItemAvatar>
			<ListItemText
				classes={{
					root: employeeitemTextRoot,
					primary: employeeitemTextPrimary,
				}}
				primary={fullName}
			/>
		</ListItem>
	);
};

export default EmployeeListItem;
