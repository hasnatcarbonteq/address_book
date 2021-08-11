import {
    GET_DATA,
    GET_USER_DETAIL,
    SET_RESERVE_DATA,
    GET_RESERVE_DATA,
    CHANGE_NAT,
} from '../types'

const init = {
    isLoading: true,
    page: 1,
    data: [], 
    reserveData: [],
    details: {},  
    nat:'US',
}

const dataGridReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                page: 1,
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
                page: state.page+1,
                isLoading: false,
            }
        case GET_RESERVE_DATA: 
            let reserve = [...state.data, ...state.reserveData]
            return {
                ...state,
                data: reserve,
            }
        case CHANGE_NAT:
            return {
                ...state,
                nat: action.payload,
            }
        default:
            return state
    }
}

export default dataGridReducer