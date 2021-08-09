import axios from "axios";

import {
    GET_DATA,
    GET_USER_DETAIL,
    SET_RESERVE_DATA,
    GET_RESERVE_DATA,
} from './types'
import Services_Apis from '../../services/apis'

const Apis = new Services_Apis()

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

const getReserveData = (index) => async dispatch => {
    try{
        console.log(index)
        let res = await Apis.getReserveData(index)
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


export {
    getData,
    getDetails,
    getReserveData,
}