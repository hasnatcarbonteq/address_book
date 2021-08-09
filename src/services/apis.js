import axios from 'axios';

const server = 'https://randomuser.me/api'


class Services_Apis {

    getData = async(index, nat) => {
        try{
            let res = await axios.get(`${server}/?page=${index}&results=50&seed=address&nat=${nat}`) 
            let res2 = await axios.get(`${server}/?page=${index+1}&results=50&seed=address&nat=${nat}`)
            if(res.status === 200){
                return {
                    data: res.data.results,
                    reserve: res2.data.results,
                    errors: ''
                }
            }
        } catch (error) {
            console.log(error)
            return {
                data: '',
                reserve: '',
                errors: error
            }
        }
    }

    getReserveData = async (index) => {
        try{
            let res = await axios.get(`${server}/?page=${index}&results=50&seed=address&nat=us`) 
            if(res.status === 200){
                return {
                    reserve: res.data.results,
                    errors: ''
                }
            }
        } catch (error) {
            console.log(error)
            return {
                reserve: '',
                errors: errors,
            }
        }
    }
}

export default Services_Apis;