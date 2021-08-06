import axios from "axios";

import {
    GET_DATA,
    SET_USER_DETAIL,
} from './types'

// const API_KEY = process.env.RANDOM_API_KEY
const server = 'https://randomuser.me/api/'

const getData = () => async dispatch => {

    try{
        let res = await axios.get(`${server}/?results=50`) 
        if(res.status === 200){
            dispatch({
                type: GET_DATA,
                payload: res.data.results,
            })
            return true
        }
    } catch (error) {
        console.log(error)
        return false
    }
}


export {
    getData,
}