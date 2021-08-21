import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
};

let axiosInstance = axios.create(config);

const getAxiosUsers = () => {
    return axiosInstance.get('users');
}

const getPostOfUser = (id) => {
    return axiosInstance('users/' + id + '/posts')
}


export { getAxiosUsers,getPostOfUser };