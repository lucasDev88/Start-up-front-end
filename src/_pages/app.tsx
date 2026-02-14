import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./navigation/home"
import "../style/App.css"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}