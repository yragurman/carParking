import React from "react";
import {NavLink} from "react-router-dom";

import { Wrapper, LogoWrapper, Navigation } from "./Header.styled";

function Header(){
    return(
        <Wrapper>
            <LogoWrapper>CarParking</LogoWrapper>
            <Navigation>
                <ul>
                    <li>
                        <NavLink to="/">Головна</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ParkingCamera">Камера Live</NavLink>
                    </li>
                </ul>
            </Navigation>
        </Wrapper>
    )
}

export default Header;
