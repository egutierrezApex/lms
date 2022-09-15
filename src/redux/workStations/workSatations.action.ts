import WorkStationsActionTypes from './types/workStations.type';
import { ISort, IWorkStation, IWorkStationsOptions } from './types/workStationsInterfaces';

export const getWorkStations = (query: string) => ({
    type: WorkStationsActionTypes.GET_WORKSTATIONS_COLLECTION,
    payload: query
})

export const setNameQuery = (name:string) => ({
    type: WorkStationsActionTypes.SET_NAME_QUERY,
    payload: name
})
export const setSort = (sort:ISort) => ({
    type: WorkStationsActionTypes.SET_SORT,
    payload: sort
})
export const setCurrentPage = (currentPage:number) => ({
    type: WorkStationsActionTypes.SET_CURRENT_PAGE,
    payload: currentPage
})

export const setError = (msg:string) => ({
    type: WorkStationsActionTypes.SET_ERROR,
    payload: msg
})

export const setWorkStationCollection = (workStationCollections:Array<IWorkStation>) => ({
    type: WorkStationsActionTypes.SET_WORKSTATION_COLLECTION,
    payload: workStationCollections
})

export const setSelectedWorkstation = (workStation:IWorkStation) => ({
    type: WorkStationsActionTypes.SET_SELECTED_WORKSTATION,
    payload: workStation
})

// export const setLoading = (isLoading:boolean) => ({
//     type: WorkStationsActionTypes.SET_LOADING,
//     payload: isLoading
// })

export const getWorkStationsOption = (workstationOptions:IWorkStationsOptions) => ({
    type: WorkStationsActionTypes.GET_WORKSTATIONS_OPTION,
    payload: workstationOptions
})