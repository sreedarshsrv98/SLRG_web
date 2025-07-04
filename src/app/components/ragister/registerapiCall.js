import { apiCall } from "../../services/apiCall";

export const register = async (data) => {
    const response = await apiCall("post", "/", data);
    
    console.log(response,"response------------------")
    return response.data;
};