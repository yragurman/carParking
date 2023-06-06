import React from "react";

function ParkingCamera(){
    return(
        <div>
            <h1>Hello i`m parking live</h1>
            <img
            src="http://localhost:5000/video_feed"
            alt="Video"
            />
        </div>
    )
}

export default ParkingCamera;