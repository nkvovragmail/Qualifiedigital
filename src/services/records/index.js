import { STORE_RECORD_DATA } from './actionTypes';

const initialState = {
    allRecords: [],
}

export const records = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RECORD_DATA:
            return {
                ...state,
                allRecords: action.payload
            }
        default:
            return state;
    }
};