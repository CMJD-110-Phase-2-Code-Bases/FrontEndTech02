import axios from "axios";

const url = "http://localhost:8044/courseregis/api/v1/auth"

export const SignInProcess = async(signIn: any)=>{
  try{
       const response  = await axios.post(
            `${url}/signin`,
            signIn
        );
        console.log(response.data.token);
        return response.data.token;
        
  }catch(err){
      console.log(err);
      
  }
}

export const SignUpProcess = async (signUp: any)=>{
    try{
       const response = await axios.post(
            `${url}/signup`,
            signUp
        );
        console.log(response.data.token);
        return response.data.token;      

    }catch(err){
        console.log(err);
        
    }
}