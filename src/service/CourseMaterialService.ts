import axios from 'axios';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "http://localhost:8044/courseregis/api/v1/material";

export const getCourseMaterialData = async ()=>{
  try{
   const response =  await axios.get(`${baseURL}`)
   return response.data;

  }catch(err){
      console.error(err)
  }
}


export const updateCourseMaterialData = async (material: FormData) =>{
  console.log("Material is: ",material)
  
  try{
    await axios.patch(`${baseURL}`,material,{
      headers:{
         "Content-Type" :"multipart/form-data"
      }
    })

  }catch(er){
    console.log(er)
  }
}





