import { ofType, ActionsObservable, StateObservable } from 'redux-observable';
import { mergeMap } from 'rxjs/operators'
import zoneActions from '../actions';
import zoneTypes from '../actions/types';

import { IAppState } from 'types/AppInterfaces';
import { IGetZonesAction, IGetZoneAction } from 'types/zones/action';
import ZonesApiWrapper from 'utils/apiWrappers/zonesApiWrapper';

export const getZonesEpic = (action$: ActionsObservable<IGetZonesAction>) =>
	action$.pipe(
		ofType(zoneTypes.GET_ZONES),
		mergeMap(async (action) => {
			try {
				const zones = await ZonesApiWrapper.getZones();
				return zoneActions.set_zones(zones);
			} catch (err) {
				console.log('ERROR', err);
				return zoneActions.set_loading_zones(false);
			}
		})
	);

export const getZoneEpic = (
	action$: ActionsObservable<IGetZoneAction>,
	state$: StateObservable<IAppState>
) =>
	action$.pipe(
		ofType(zoneTypes.GET_ZONE),
		mergeMap(async (action) => {
			try {
				const { zoneId } = action;
				const zoneState = state$.value.zones.zones[`zone-${zoneId}`];
				if (zoneState) {
					return zoneActions.set_zone(zoneState);
				} else {
					const zone = await ZonesApiWrapper.getZone(zoneId);
					return zoneActions.set_zone(zone);
				}
			} catch (err) {
				console.log('ERROR', err);
				return zoneActions.set_loading_zones(false);
			}
		})
	);