import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./navigation/home"
import "../style/App.css"
import Login from "./navigation/login"
import SignUp from "./navigation/SignUp"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <SignUp /> } />
            </Routes>
        </BrowserRouter>
    )
}