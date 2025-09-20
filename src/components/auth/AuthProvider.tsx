import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token:string)=> void;
    logout: ()=> void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }:{children:ReactNode})=>{
  const [ isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(()=>{
      const token = localStorage.getItem("authToken")

      if(token){
          setIsAuthenticated(!!token)
      }
  },[])

  const login = (token: string)=>{
    localStorage.setItem("authToken",token)
    setIsAuthenticated(true)
  }

  const logout= ()=>{
    localStorage.removeItem("authToken")
    setIsAuthenticated(false)
}

return(
    <AuthContext.Provider value={{ isAuthenticated, login, logout}}>
        { children }
    </AuthContext.Provider>
);
  

}

//custom hook
export const useAuth = () => {
    const conext = useContext(AuthContext)
    if(!conext){
        throw new Error("must use within an AuthProvider")
    }
    return conext;   
};