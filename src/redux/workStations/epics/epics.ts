import { ofType, StateObservable, ActionsObservable } from 'redux-observable';
import WorkStationsActionTypes from '../types/workStations.type'
import {
	IWorkStationGetWorkStationsAction,
	IWorkStationQueryActionTypes
} from '../types/workStationsInterfaces';
import { map, mergeMap } from 'rxjs/operators'
import { baseConfig } from '../../../apiConfig'
import { API_ENDPOINT } from '../utils/constant'
import { IAppState } from '../../../types/AppInterfaces'
import { makeRequest } from '../../root.action'
import { setError, setWorkStationCollection } from '../workSatations.action'
import { getFormtattedWorkStations } from '../utils/index';
import { getQueryString } from './helpers'


export const setQueryEpic = (action$: ActionsObservable<IWorkStationQueryActionTypes>, state$: StateObservable<IAppState>) => action$.pipe(
    ofType(WorkStationsActionTypes.SET_NAME_QUERY, WorkStationsActionTypes.SET_SORT, WorkStationsActionTypes.SET_CURRENT_PAGE),
    map(() => {
        const stringQuery = getQueryString(state$.value.workStations.query)
        return {
            type: WorkStationsActionTypes.GET_WORKSTATIONS_COLLECTION,
            payload: stringQuery
        };
    })
)

export const getWorkStationsEpic = (action$: ActionsObservable<IWorkStationGetWorkStationsAction>, state$: StateObservable<IAppState>) => action$.pipe(
    ofType(WorkStationsActionTypes.GET_WORKSTATIONS_COLLECTION),
    mergeMap(async (action) => {
        try {
            console.log(action.payload)
            // console.log(qs.stringify(state$.value.workStations.query))
            const config = { ...baseConfig, baseURL: `${baseConfig.baseURL}${API_ENDPOINT}`, method: 'GET', path: action.payload }
            const success = (result: any) => {
                console.log("si jalo", result);
                // call the transformation
                const formattedWS = getFormtattedWorkStations(result?.data)
                if (!formattedWS) {
                    return setError("Aqui no se pudo transformar")
                }
                return setWorkStationCollection(result?.data)
            }
            const error = (error: any) => {
                console.log("no jalo", error);
                return setError(error.message)
            }
            return makeRequest(config, success, error);


        } catch (err) {
            return setError((err as any).message);
        }
    })
)