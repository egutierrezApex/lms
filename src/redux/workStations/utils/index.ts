
import {IWorkStation} from '../../workStations/types/workStationsInterfaces';

let workstation : IWorkStation={
    zoneId: 0,
    areaByFigureId: 0,
    name: "",
    description: "",
    NumberOfSeats: 0,
    x:"",
    y:""   
}
const wsArray : Array<IWorkStation> =[]

export const getFormtattedWorkStations=(workSationsArray:Array<any>)=>{



    if(!Array.isArray(workSationsArray)){
        return null
    } 
   
    for (var i = 0; i < workSationsArray.length; ++i){
        workstation = workSationsArray[i];
        wsArray.push(workstation);
    }
    //wsArray.shift();
    console.log(wsArray);
    //array.reduce array.map
    return wsArray;
}