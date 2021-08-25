import http from "../utils/httpService";
import {SERVER} from "../utils/constant";

class UserService {

    getData = async(index, nat) => {
            let res = await http.get(`${SERVER}/?page=${index}&results=50&seed=address&nat=${nat}`) 
            let res2 = await http.get(`${SERVER}/?page=${index+1}&results=50&seed=address&nat=${nat}`)
            if(res.data && res2.data){
                return {
                    data: res.data.results,
                    reserve: res2.data.results,
                    errors: ''
                }
            } else {
                return {
                    data: '',
                    reserve: '',
                    errors: res || res2
                }
            }
    }

    getReserveData = async (index, nat) => {
            let res = await http.get(`${SERVER}/?page=${index+1}&results=50&seed=address&nat=${nat}`) 
            if(res.data){
                return {
                    reserve: res.data.results,
                    errors: ''
                }
            } else {
                return {
                    reserve: '',
                    errors: res,
                }
            }
    }
}

export default UserService;