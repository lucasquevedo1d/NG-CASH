import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../Routes/cordinator";

const useProtectPage = () =>{
    //const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
           //return goToLogin(navigate)
        }
    

    }, [])
}

export default useProtectPage