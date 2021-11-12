const defaultState = {
    dataSet: [],
    currentData: []
  }

const GET_DATA = "GET_DATA";
const GET_CURRENT_DATA = "GET_CURRENT_DATAF";

export const reducer = ( state = defaultState, action ) => {
    switch ( action.type ){
        case GET_DATA:
            return {...state, dataSet: action.payload}
        case GET_CURRENT_DATA:
            return {...state, currentData: action.payload}

        default:
            return state;
    }
}

export const getDataAction = (payload) => ({type: GET_DATA, payload});
export const getCurrentDataAction = (payload) => ({type: GET_CURRENT_DATA, payload});
export const deleteCurrentDataAction = (payload) => ({type: GET_CURRENT_DATA, payload});
export const patchCurrentDataAction = (payload) => ({type: GET_CURRENT_DATA, payload});


