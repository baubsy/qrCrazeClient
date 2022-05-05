import React from "react";
import QRDisplay from "./Components/QRDisplay";
import {Routes, Route} from 'react-router-dom';
import LandingPage from "./Components/LandingPage";


const App = () => {
    return (
        <Routes>
            <Route path="qr/:qrId" element={<QRDisplay/>}/>
            <Route path="/" element={<LandingPage/>}/>
        </Routes>
    );
};

export default App;
