import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';

const getUsers = () => {
    debugger
    return axios.get(`${baseUrl}/users`);
}

const getUniqueUser = (id) => {
    return axios.get(`${baseUrl}/user/${id}`)
}

const postUser = (user) => {
    return axios.post(`${baseUrl}/user`, user)
}

const deleteUser = (id) => {
    return axios.delete(`${baseUrl}/delete/user/${id}`)
}

const updateUser = (id, payload) => {
    return axios.put(`${baseUrl}/update/user/${id}`, payload)
}

const api = {
    getUsers,
    postUser,
    deleteUser,
    getUniqueUser,
    updateUser
}

export default api;