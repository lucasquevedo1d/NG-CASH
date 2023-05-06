import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "../signup/signup"
import Login from "../login/login"
import { Home } from "../home/home"
import Extract from "../extract/extract"
import { Payment } from "../Payment/payment"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home/:id" element={<Home/>} />
                <Route path="/extract/:id" element={<Extract/>}/>
                <Route path="/payment/:id" element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
    )
}