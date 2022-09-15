import {getQueryString} from '../../epics/helpers'
import { IQuery, ISort } from '../../types/workStationsInterfaces';

const sortSuccessfull: ISort = {
    field:"Id",
    order:"asc"
 }

const querySuccessfull: IQuery = {
    name:"TV workstation",
    currentPage:0,
    sort:sortSuccessfull
}


describe("helpers test",() => {
    describe("getQueryString function",() => {
        test("With correct payload return a valid string",() => {       
            const output = "?value=TV%20workstation&limit=20&offset=0&sort=Id%20asc";
            expect(getQueryString(querySuccessfull)).toEqual(output);   
        })
    })
})