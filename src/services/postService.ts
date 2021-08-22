import axios from 'axios';
import {getUser} from './userService';
// types
import {Post} from '../types/Post';

const getPosts = async ():Promise<Post[]>=>{

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        return response.data;
}

const getPostsWithUser = async ():Promise<Post[]>=>{

    const posts = await getPosts();

    const uniqueUsers:number[]=[];

    posts.forEach(elem=>{
        if(!uniqueUsers.includes(elem.userId)) {
            uniqueUsers.push(elem.userId);
        }
    });

    // array of network request to grab all the users in the list of posts
    const requestsArray=uniqueUsers.map(elem=>getUser(elem));

    // Promise.all: wait until all of the promises to resolve
    const allUsers = await Promise.all(requestsArray);

    // injecting the corresponding user inside of the posts objects
    const fullPosts = posts.map(post=>{
        // user for the current post
        const user = allUsers.find(user=>user.id === post.userId);

        // returning the current post + the "user" prop
        return {
            ...post,
            user
        }
    });

    return fullPosts;

}




export {
    getPosts,
    getPostsWithUser
}
