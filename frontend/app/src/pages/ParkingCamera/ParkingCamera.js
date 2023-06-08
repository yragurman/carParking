import React from "react";

import { Wrapper, VideoImg, TextWrapper, Heading, Text } from "./ParkingCamera.styled"

function ParkingCamera(){
    return(
        <Wrapper>
            <VideoImg src="http://localhost:5000/video_feed" alt="Live Web Video"/>
            <TextWrapper>
                <Heading>ТЦ  Аркадія</Heading>
                <Text>Адреса: вул.Борщагівська, 154а, Київ</Text>
                <Text>Робочі години: відчинено до 22:00</Text>
                <Text>Телефон: 044 594 0700</Text>
            </TextWrapper>
        </Wrapper>
    )
}

export default ParkingCamera;