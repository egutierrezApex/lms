import rootTypes from '././root.types';
import {IAxiosConfig} from '../types/AppInterfaces'

export const makeRequest = (config:IAxiosConfig, success:any, error:any) => ({
    type: rootTypes.REQUEST, paylod:{config, successCb:success, errorCb:error}
})