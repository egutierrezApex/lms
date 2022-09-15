import axios from 'axios';
import { BuildingRequestData } from 'redux/buildings/types';
import { IGroup } from 'types/shared';
import { apiURL, QueryParams } from 'utils/constants';

const groupsURL = apiURL + 'Groups';

const GroupsApiWrapper = {
	getGroups: (params?: QueryParams): Promise<IGroup[]> => {
		const groups = axios
			.get(groupsURL, { params })
			.then((result) => {
				const groupList = result.data as IGroup[];
				return groupList.map((group) => {
					return { ...group } 
				})	
				} 
			)
		return groups;
	},
	getGroupData: (groupId: number): Promise<IGroup> => {
		const groupData = axios
			.get(`${groupsURL}/${groupId}`)
			.then((result) => result.data as IGroup);
		return groupData;
	},
	deleteGroup: (groupId?: number): Promise<number> => {
		return axios.delete(`${groupsURL}/${groupId}`).then((result) => result.status);	
	},
	postGroup: (group: IGroup): Promise<IGroup> => {
		return axios.post(groupsURL, group).then((result) => result.data as IGroup);
	},
	putGroup: (group: IGroup) => {
		return axios.put(groupsURL, group).then((result) => result.data);
	}
};

export default GroupsApiWrapper;
