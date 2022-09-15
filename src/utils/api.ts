import axios from "axios";
import qs from 'qs';

var baseUrl = process.env.REACT_APP_API;
const ENDPOINT_WORKSTATIONS = "workstations"
const ENDPOINT_EMPLOYEES = "Employees"

const formattedData = (data: any) => data

const GetWorkStations = async (query: string) => {
    try {
        const response = await axios.get(`${baseUrl}${ENDPOINT_WORKSTATIONS}${query}`)
        return formattedData(response)

    } catch (error) {
        console.error(error)
        return error
    }
}

export const WorkStation = {
    GetWorkStationsById: async (id: string) => {
        if (id) {
            return await GetWorkStations(`/${id}`);
        }
        else {
            console.error("Not valid Id.");
        }

    },
    GetWorkStationsByQuery: async (query: any) => {
        if (query) {
            const queryString = qs.stringify(query);
            return await GetWorkStations(`?${queryString}`);
        }
        else {
            console.error("Not valid Query.");
        }
    }
}

//export const workstations();

export const Employees = {
    getEmployees: async(field:string, value:string) => {
        var baseRequest =  `${baseUrl}${ENDPOINT_EMPLOYEES}?`;
        if (value !== undefined)
            baseRequest += `&${field}=${value}`
        try{
            const res = await axios.get(`${baseRequest}`);
            return res.data;
        } catch(err){
            return undefined;
        };
    }
}

export const getRequest = async (config: any, type: string) => axios.get(`${config.baseURL}${type}`)