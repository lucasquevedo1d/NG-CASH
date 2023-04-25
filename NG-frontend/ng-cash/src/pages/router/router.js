import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "../signup/signup"
import Login from "../login/login"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}