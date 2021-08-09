import {
    GET_DATA,
    GET_USER_DETAIL,
    SET_RESERVE_DATA,
    GET_RESERVE_DATA,
} from '../actions/types'

const init = {
    isLoading: true,
    index: 1,
    data: [], 
    reserveData: [],
    details: {},  
    nat:'us',
}

const dataGridReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DATA:
            let data = [ ...state.data, ...action.payload]
            return {
                ...state,
                isLoading: false,
                data: data,
            }
        case GET_USER_DETAIL: 
            return {
                ...state,
                details: action.payload,
            }
        case SET_RESERVE_DATA: 
            return {
                ...state,
                reserveData: action.payload,
                index: state.index+1,
                isLoading: false,
            }
        case GET_RESERVE_DATA: 
            let reserve = [...state.data, ...state.reserveData]
            return {
                ...state,
                data: reserve,
            }
        default:
            return state
    }
}

export default dataGridReducer