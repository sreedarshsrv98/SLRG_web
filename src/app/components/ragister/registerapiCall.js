import { get } from "@/app/services/apiCall"; 
import { useCallback } from "react";
// export const register = async (data) => {
//     const response = await apiCall("post", "/", data);
    
//     // console.log(response,"response------------------")
//     return response.data;
// };


export const getDistrictsApi = async () => {
    const response = await get( "/options/districts");
    
    console.log(response,"response------------------")
    return response.data;
};