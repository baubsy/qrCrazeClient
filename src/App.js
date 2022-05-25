import React, {useState} from "react";
import QRDisplay from "./Components/QRDisplay";
import {Routes, Route} from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";


const App = () => {
    return (
        <Routes>
            <Route path="qr/:qrId" element={<QRDisplay/>}/>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    );
};

export default App;
