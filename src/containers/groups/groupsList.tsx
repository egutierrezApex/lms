import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import GroupCardButton from '../../components/card/button';
import GroupCard from '../../components/card/groupCard';
import { useNavigate } from 'react-router';
import { IGroup } from 'types/shared';

interface IGroupList {
	groups: IGroup[];
}

function GroupsList(props: IGroupList) {
	const navigate = useNavigate();
	const { groups: cards } = props;
	const createGroup = () => {
		navigate('/groups/create');
	};

	return (
		<Grid container spacing={5}>
			<Grid item sm={6} md={4} lg={3}>
				<GroupCardButton title="Create New Group" onClick={createGroup} />
			</Grid>
			{cards.map((item) => {
				const { name, id, description } = item;
				return (
					<Grid item sm={6} md={4} lg={3} key={id}>
						<GroupCard title={name} id={id} description={description}/>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default GroupsList;
