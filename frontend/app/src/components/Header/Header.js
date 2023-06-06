import React from "react";
import {NavLink} from "react-router-dom";

import { Wrapper, LogoWrapper, ImgLogo, Navigation } from "./Header.styled";

function Header(){
    return(
        <Wrapper>
            <LogoWrapper>
                Logo
            </LogoWrapper>
            <Navigation>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ParkingCamera">Parking Live</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ParkingList">Parking List</NavLink>
                    </li>
                </ul>
            </Navigation>
        </Wrapper>
    )
}

export default Header;
