import { getDataAction, getCurrentDataAction, deleteCurrentDataAction, patchCurrentDataAction } from "../listReducer";
import axios from "axios";
import { mainUrl } from "./URL";

export const fetchData = () => {
    return async (dispatch) => {
        const response = await axios.get(`${mainUrl}list`);

        dispatch(getDataAction(response.data));
    }
}
export const getCurrentData = (current) => {
    return async (dispatch) => {
        const response = await axios.get(`${mainUrl}list/${current}`);
        
        dispatch(getCurrentDataAction(response.data));
    }
}
export const deleteCurrentData = (current) => {
    return async (dispatch) => {
        const response = await axios.delete(`${mainUrl}list/${current}`);
        
        dispatch(deleteCurrentDataAction(response.data));
    }
}
export const patchCurrentData = (current, payload) => {
    return async (dispatch) => {
        const response = await axios.put(`${mainUrl}list`,{
            id: current,
            descript: payload.descript,
            price: payload.priceList
        });
        
        dispatch(patchCurrentDataAction(response.data));
    }
}