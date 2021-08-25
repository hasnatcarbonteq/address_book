import axios from "axios";

import {
    GET_DATA,
    GET_USER_DETAIL,
    SET_RESERVE_DATA,
    GET_RESERVE_DATA,
    CHANGE_NAT,
} from '../types'
import UserService from '../../Services/UserService'

const Apis = new UserService()

const getData = (index, nat) => async dispatch => {

    try{
        let res = await Apis.getData(index, nat)
        if(!res.errors){
            dispatch({
                type: GET_DATA,
                payload: res.data,
            })
            dispatch({
                type: SET_RESERVE_DATA,
                payload: res.reserve,
            })
            return true
        } else throw res
    } catch (error) {
        console.log(error)
        return false
    }
}

const getDetails = (data) => async dispatch => {
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

const getReserveData = (index, nat) => async dispatch => {
    try{
        let res = await Apis.getReserveData(index, nat)
        if(res.reserve){
            dispatch({
                type: GET_RESERVE_DATA,
            })
            dispatch({
                type: SET_RESERVE_DATA,
                payload: res.reserve,
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
    getData,
    getDetails,
    getReserveData,
    changeNationality,
}