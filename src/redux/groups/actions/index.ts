import { IGroup } from 'types/shared';
import { GroupsActionTypes } from '../types';

export const getGroup = (groupId: Pick<IGroup, 'id'> | undefined) => ({
	type: GroupsActionTypes.GET_BY_ID,
	payload: groupId
});

export const selectGroup = (group: IGroup | undefined) => ({
	type: GroupsActionTypes.SET_ACTIVE_GROUP,
	payload: group
});

export const unselectGroup = () => ({
	type: GroupsActionTypes.UNSET_ACTIVE_GROUP,
	payload: null
});

export const createGroup = (group: IGroup) => ({
	type: GroupsActionTypes.CREATE,
	payload: group
});

export const updateGroup = (group: IGroup) => ({
	type: GroupsActionTypes.EDIT,
	payload: group
});

export const deleteGroup = (group: IGroup) => ({
	type: GroupsActionTypes.DELETE,
	payload: group
});
