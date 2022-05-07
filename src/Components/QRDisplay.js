import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import backEnd from "../backEnd";


const QRDisplay = () => {
    const [score, setScore] = useState(0);
    const id = useParams().qrId;
    const navigate = useNavigate();
    useEffect(() => {
        const helper = async () => {
            try{
                //const response = await axios.get(`http://localhost:8080/qr/${id}`);
                const response = await backEnd.get(`/qr/${id}`)
                setScore(response.data.score);
                //console.log(response);
            } catch(error){
                //TODO make backend return 404, make real error page
                console.log(error);
                navigate('/')
            }
            
            
            
        };
        helper();
    }, []);

    const [image, setImage] = useState("");
    return (
        <div>
            <div>
                <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/qr/${id}&amp;size=100x100`}
                ></img>
            </div>
            <h1>Your the {score}th person to scan this code</h1>
        </div>
    );
};

export default QRDisplay;
