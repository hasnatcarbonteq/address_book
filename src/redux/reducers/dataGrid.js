import {
    GET_DATA,
    SET_USER_DETAIL,
} from '../actions/types'

const init = {
    isLoading: true,
    data: [], 
    details: {},  
}

const dataGridReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case SET_USER_DETAIL: 
            return {
                ...state,
                details: action.payload,
            }
        default:
            return state
    }
}

export default dataGridReducer