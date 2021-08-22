import axios from 'axios';
import {User} from '../types/User';

const getUser = async (id:number):Promise<User>=>{

        const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);

        return response.data;
}




export {
    getUser
}
