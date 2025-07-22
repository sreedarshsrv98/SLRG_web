// utils/axios.js or wherever your Axios config is
import axios from "axios";
import { API_URL } from "../config";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = JSON.parse(localStorage.getItem("token"));
            if (token?._id) {
                config.headers["token"] = token._id; 
            }
        }
        config.withCredentials = true; 
        return config;
    },
    (error) => Promise.reject(error)
);

// API functions
const post = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (err) {
        return Promise.reject(err.response?.data || err.message);
    }
};

const put = async (url, data) => {
    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (err) {
        return Promise.reject(err.response?.data || err.message);
    }
};

const get = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        return Promise.reject(err.response?.data || err.message);
    }
};

const del = async (url) => {
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        return Promise.reject(error.response?.data || error.message);
    }
};

export { get, post, put, del };