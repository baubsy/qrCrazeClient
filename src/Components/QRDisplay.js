import React, { useEffect, useState } from "react";
import axios from "axios";

const tempData = { qrId: "1" };

const QRDisplay = () => {
    useEffect(() => {
        const helper = async () => {
            axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
            const response = await axios.get("http://localhost:8080/qr/1");
            console.log(response);
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
            <h1>Your the Xth person to scan this code</h1>
        </div>
    );
};

export default QRDisplay;
