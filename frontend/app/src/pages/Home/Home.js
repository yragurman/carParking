import React from "react";

import { Wrapper, HeadlineWrapper, MapWrapper, Esp32Wrapper, HeadLineImg, HeadLineText, MapText, MapImg, Esp32Text, Esp32Img} from "./Home.styled";

import CarImage from "../../image/headlineIMG.png"
import MapImage from "../../image/map.png"
import Esp32Image from "../../image/esp32IMG.png"

function Home(){
    return(
        <Wrapper>
            <HeadlineWrapper>
                <HeadLineImg src={CarImage} alt="Parking Image" />
                <HeadLineText>
                    Швидко відслідковуйте вільні паркувальні місця за допомогою нашого сайту!
                </HeadLineText>
            </HeadlineWrapper>
            <MapWrapper>
                <MapText>
                    Як це працює? Все просто! Просто відвідайте наш сайт і введіть місцезнаходження,
                    де ви хочете знайти паркувальне місце. Наша система миттєво відобразить на карті всі
                    доступні парковки у вибраному районі, показуючи їхню поточну доступність.
                </MapText>
                <MapImg src={MapImage} alt="KyivMap Image" />
            </MapWrapper>
            <Esp32Wrapper>
                <Esp32Text>
                    Наша система відеотрансляцій побудована на основі ESP32,
                    що надає низьку затримку та високу якість передачі зображення.
                    ESP32 - це потужний мікроконтролер, що комбінує в собі Wi-Fi та Bluetooth можливості,
                    що робить його ідеальним рішенням для передачі відео в режимі реального часу.
                </Esp32Text>
                <Esp32Img src={Esp32Image} alt="ESP32 Image" />
            </Esp32Wrapper>
        </Wrapper>
    )
}

export default Home;