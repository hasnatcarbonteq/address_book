import {
    GET_USER_DATA,
    GET_USER_DETAIL,
    SET_CHACHED_DATA,
    GET_CHACHED_DATA,
    CHANGE_NAT,
} from '../types'

const init = {
    isLoading: true,
    page: 1,
    userData: [], 
    chachedData: [],
    details: {},  
    nat:'US',
}

const userTableReducer = (state = init, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                page: 1,
            }
        case GET_USER_DETAIL: 
            return {
                ...state,
                details: action.payload,
            }
        case SET_CHACHED_DATA: 
            return {
                ...state,
                chachedData: action.payload,
                page: state.page+1,
                isLoading: false,
            }
        case GET_CHACHED_DATA: 
            let reserve = [...state.userData, ...state.chachedData]
            return {
                ...state,
                userData: reserve,
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

export default userTableReducer