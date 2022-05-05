import React, { useEffect, useState } from "react";
import axios from "axios";

const tempData = { qrId: "1" };

const QRDisplay = () => {
    const [score, setScore] = useState(0);
    useEffect(() => {
        const helper = async () => {
            const response = await axios.get("http://localhost:8080/qr");
            setScore(response.data.score);
        };
        helper();
    }, []);

    const [image, setImage] = useState("");
    return (
        <div>
            <div>
                <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/qr/${tempData.qrId}&amp;size=100x100`}
                ></img>
            </div>
            <h1>Your the {score}th person to scan this code</h1>
        </div>
    );
};

export default QRDisplay;
