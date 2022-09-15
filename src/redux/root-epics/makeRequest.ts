import { ofType, StateObservable, ActionsObservable } from 'redux-observable';
import { mergeMap, catchError } from 'rxjs/operators';
import axios, { Method } from 'axios';
import makeRequest from '../root.types';
import { IMakeRequestAxios, IAppState } from '../../types/AppInterfaces';

//meter aqui todos dentro como any o como ors
export const makeRequestEpic = (
	action$: ActionsObservable<IMakeRequestAxios>,
	state$: StateObservable<IAppState>
) =>
	action$.pipe(
		ofType(makeRequest.REQUEST),
		mergeMap(async (action: IMakeRequestAxios) => {
			const { config, successCb, errorCb } = action.paylod;
			try {
				const res = await axios.request({
					baseURL: `${config.baseURL}${config.path || ''}`,
					timeout: config.timeout,
					method: config.method as Method,
					headers: config.headers,
					data: config.paylod
				});
				return successCb(res);
			} catch (err) {
				return errorCb(err);
			}
		}),
		catchError((error) => {
			throw new Error(`Make Request Epic: ${error.message}`);
		})
	);
