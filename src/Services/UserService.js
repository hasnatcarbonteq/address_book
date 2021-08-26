import http from "../utils/httpService";
import {SERVER} from "../utils/constant";

class UserService {

    constructor(nat,page,nextPage){
        this.nat = nat
        this.page = page
        this.nextPage = nextPage
    }

    getUserData = async() => {
            let response = await http.get(`${SERVER}/?page=${this.page}&results=50&seed=address&nat=${this.nat}`) 
            let cachedResponse = await http.get(`${SERVER}/?page=${this.nextPage}&results=50&seed=address&nat=${this.nat}`)
            if(response.data && cachedResponse.data){
                return {
                    data: response.data.results,
                    cachedResponse: cachedResponse.data.results,
                    errors: ''
                }
            } else {
                return {
                    data: '',
                    reserve: '',
                    errors: response || cachedResponse
                }
            }
    }

    getChachedData = async () => {
            let response = await http.get(`${SERVER}/?page=${this.nextPage}&results=50&seed=address&nat=${this.nat}`) 
            if(response.data){
                return {
                    cachedResponse: response.data.results,
                    errors: ''
                }
            } else {
                return {
                    cachedResponse: '',
                    errors: response,
                }
            }
    }
}

export default UserService;