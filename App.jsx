import React from "react"
import Nav from "./components/Nav"
import Body from "./components/Body.jsx"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <Router>
               <Nav />
                <Routes>
                    <Route path = "/" element = {<Body/>}></Route>
                    <Route path = "/contact" element = {<Contact/>}></Route>
                </Routes> 
            </Router>
        </div>
    )
}