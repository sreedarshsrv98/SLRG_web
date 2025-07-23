// // utils/axios.js or wherever your Axios config is
// import axios from "axios";
// import { API_URL } from "../config";

// axios.defaults.baseURL = API_URL;

// axios.interceptors.request.use(
//     (config) => {
//         if (typeof window !== 'undefined') {
//             const token = JSON.parse(localStorage.getItem("token"));
//             if (token?._id) {
//                 config.headers["token"] = token._id; 
//             }
//         }
//         config.withCredentials = true; 
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// // API functions
// const post = async (url, data) => {
//     try {
//         if (!data) {
//             throw new Error("POST request missing data payload");
//         }

//         console.log("Sending data:", data);
//         const response = await axios.post(url, data);
//         console.log("Response:", response);
//         return response.data;
//     } catch (err) {
//         console.error("POST error:", err);
//         return Promise.reject(err.response?.data || err.message);
//     }
// };


// const put = async (url, data) => {
//     try {
//         const response = await axios.put(url, data);
//         return response.data;
//     } catch (err) {
//         return Promise.reject(err.response?.data || err.message);
//     }
// };

// const get = async (url) => {
//     try {
//         const response = await axios.get(url);
//         return response.data;
//     } catch (err) {
//         return Promise.reject(err.response?.data || err.message);
//     }
// };

// const del = async (url) => {
//     try {
//         const response = await axios.delete(url);
//         return response.data;
//     } catch (error) {
//         return Promise.reject(error.response?.data || error.message);
//     }
// };

// export { get, post, put, del };
// utils/axios.js
import axios from "axios";
import { API_URL } from "../config";

// Set the base URL globally
axios.defaults.baseURL = API_URL;

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      try {
        const parsedToken = JSON.parse(token);
        if (parsedToken?._id) {
          config.headers["token"] = parsedToken._id;
        }
      } catch (e) {
        console.warn("Invalid token format in localStorage");
      }
    }

    config.withCredentials = true;
    return config;
  },
  (error) => Promise.reject(error)
);

// POST
const post = async (url, data) => {
  try {
    if (!data) {
      throw new Error("POST request missing data payload");
    }

    console.log("Sending data:", data);

    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response:", response);
    return response.data;
  } catch (err) {
    console.error("POST error:", err);
    const errorMessage = err.response?.data || err.message || "Unknown error";
    return Promise.reject(errorMessage);
  }
};

// PUT
const put = async (url, data) => {
  try {
    const response = await axios.put(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    const errorMessage = err.response?.data || err.message || "Unknown error";
    return Promise.reject(errorMessage);
  }
};

// GET
const get = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    const errorMessage = err.response?.data || err.message || "Unknown error";
    return Promise.reject(errorMessage);
  }
};

// DELETE
const del = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    const errorMessage = err.response?.data || err.message || "Unknown error";
    return Promise.reject(errorMessage);
  }
};

export { get, post, put, del };
