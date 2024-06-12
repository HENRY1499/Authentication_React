import axios from "axios";

const api = axios.create({
  //It´s endpoint only for test http://127.0.0.1:8000. You can put your endpoint of preference 
  baseURL: '',
});

export const fetxhData = async () => {
  try {
    const response = await api.get("/auth/register");
    console.log("resp:", response.data);
  } catch (error) {
    console.log("Error obteniendo data:",error);
    throw error;
  }
};

export const postData=async(data)=>{

    try {
        const resp= await api.post("/auth/register",data);
        return resp.data;
    } catch (error) {
        console.log("error registrando usuario",error);
        throw error;
    }
}

