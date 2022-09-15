import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles';

interface UserAvatarProps {
	image?: string;
	fullName: string;
	size?: 'small' | 'large';
}

const UserAvatar: React.FC<UserAvatarProps> = ({
	image,
	fullName,
	size = 'large',
}) => {
	const { large, small } = styles();
	const getSize = () => {
		if (size === 'small') return small;
		return large;
	};
	const defaultProps = {
		className: getSize(),
		alt: fullName,
	};
	return image ? (
		<Avatar {...defaultProps} src={image} />
	) : (
		<Avatar {...defaultProps}>{fullName[0]}</Avatar>
	);
};

export default UserAvatar;
