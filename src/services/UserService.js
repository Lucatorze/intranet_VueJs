import axios from "axios";

const API_ENDPOINT = '//localhost:1337'

export default {
    fetchAll() {
        return axios
            .get(`${API_ENDPOINT}/collaborateurs`)
            .then(res => res.data)
            .catch(console.error);
    },
    fetchOne(user) {
        return axios
            .get(`${API_ENDPOINT}/collaborateurs/${user._id}`)
            .then(res => res.data)
            .catch(console.error);
    },
    removeUser(user){
        return axios
            .delete(`${API_ENDPOINT}/collaborateur/${user._id}`)
            .then(res => res.data)
            .catch(console.error);
    },
    addUser(user){
        return axios
        .post(`${API_ENDPOINT}/collaborateur`, user)
        .then(res => res.data)
        .catch(console.error);
    }
}