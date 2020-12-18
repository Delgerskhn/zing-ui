import axios from 'axios';

const api = axios.create({
    baseURL: "",
});

export async function registerAPI(mydata) {
    return await api.post("/", mydata).then((res) => {
            console.log(res.data);
            localStorage.setItem('token', res.data);
        })
        .catch(e => {
            console.log(e);
        });
}