import axios from "axios";

export async function usePostFetch({ url,data }){
    try{
        const response = await axios.post(`${url}`, { ...data });
        return response;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log("------------------------------------------");
        console.log(errorMessage);
    }
};

export async function usePutFetch({ url,code,data }){
    try{
        const response = await axios.put(`${url}/${code}`, {
            ...data
        });

        return response;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log("-----------------------------------------------------");
        console.log(errorMessage);
    }
};

export async function useDeleteFetch({ url, code }){
    try{
        const response = await axios.delete(`${url}/${code}`);
        return response;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log("-------------------------------------------------------------");
        console.log(errorMessage);
    }
};