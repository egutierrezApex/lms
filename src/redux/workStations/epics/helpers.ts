import qs from 'qs';
import { IQuery } from '../../workStations/types/workStationsInterfaces';
import { LIMIT } from '../utils/constant';

const defaultSort= {
    field:"Id",
    order:"asc"
}


const defaultQuery ={
    value:"",
    limit:LIMIT,
    offset:0, 
    sort:defaultSort, 
}

export const getQueryString = (queryObj:IQuery): string=>{
    const formattedQuery = {
        value:queryObj.name || defaultQuery.value,
        limit: defaultQuery.limit,
        offset: defaultQuery.limit * (queryObj.currentPage || 0),
        sort:`${queryObj.sort?.field || defaultQuery.sort.field} ${queryObj.sort?.order || defaultQuery.sort.order}`,      
    };
    
    return `?${qs.stringify(formattedQuery)}`;
} 