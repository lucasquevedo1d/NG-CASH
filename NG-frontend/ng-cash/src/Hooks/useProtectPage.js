import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../pages/router/coordinator";
// import { goToLogin } from "../pages/router/coordinator";

export const useProtectPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = window.localStorage.getItem('token')
        if(!token){
           return goToLogin(navigate)
        }

    }, [])
}

export default useProtectPage