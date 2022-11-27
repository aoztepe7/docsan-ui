import axios from "axios";
import { toast } from 'react-toastify';
import { toLoading, toUnloading } from "./Loading";

const apiUrl = "http://localhost:5150/api/";
const basicConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const tokenConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
};

function checkToken() {
    if (localStorage.getItem('token') == null || localStorage.getItem('token') == '') {
        toast.info("Your session has expired! Please login again!");
        setTimeout(window.location.pathname = "/login", 2000);
    }
}

export async function sendRequest(basePath, requestBody, withToken = true) {
    return Post(basePath, requestBody, withToken);
}

function handleErrorResponse(error) {
    if (error.status == 401) {
        toast.info("Your session has expired! Please login again!");
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setTimeout(window.location.pathname = "/login", 2000);
    } else {
        if (error.response.data != undefined) {
            toast.error(error.response.data.message, { autoClose: 1500 });
        } else {
            toast.error(error.message, { autoClose: 1500 });
        }
    }
}
export async function Post(path, data, withToken) {
    if (withToken)
        checkToken();
    return await axios.post(apiUrl + path, data, tokenConfig).then(response => response.data).catch(error => {
        handleErrorResponse(error);
    });
};

export async function LogIn(data) {
    toLoading();
    await axios.post(apiUrl + "user/login", data, basicConfig).then((response) => {
        toast.success("Success", { autoClose: 1500 });
        var token = response.data.data.token;
        var user = response.data.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        toUnloading();
        setTimeout(window.location.pathname = "/", 2000);
    }).catch(error => {
        toUnloading();
        toast.error(error.response.data.message, { autoClose: 1500 });
    });
};