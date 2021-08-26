import {
    GET_USER_DATA,
    GET_USER_DETAIL,
    SET_CHACHED_DATA,
    GET_CHACHED_DATA,
    CHANGE_NAT,
} from '../types'
import UserService from '../../Services/UserService'


const getUserList = (page, nat) => async dispatch => {

    try{
        const userService = new UserService(nat,page,page+1)
        let response = await userService.getUserData()
        if(!response.errors){
            dispatch({
                type: GET_USER_DATA,
                payload: response.data,
            })
            dispatch({
                type: SET_CHACHED_DATA,
                payload: response.cachedResponse,
            })
            return true
        } else throw response
    } catch (error) {
        console.log(error)
        return false
    }
}

const getUserDetail = (data) => async dispatch => {
    try{
        dispatch({
            type: GET_USER_DETAIL,
            payload: data,
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

const getChachedData = (page, nat) => async dispatch => {
    try{
        const userService = new UserService(nat,page,page+1)
        let res = await userService.getChachedData()
        if(res.cachedResponse){
            dispatch({
                type: GET_CHACHED_DATA,
            })
            dispatch({
                type: SET_CHACHED_DATA,
                payload: res.cachedResponse,
            })
            return true
        } else throw res
    } catch (error) {
        console.log(error)
        return false
    }
}

const changeNationality = (nat) => async dispatch => {

    try{
        dispatch({
            type: CHANGE_NAT,
            payload: nat,
        })
    } catch (error){
        console.log(error)
        return false
    }
}


export {
    getUserList,
    getUserDetail,
    getChachedData,
    changeNationality,
}