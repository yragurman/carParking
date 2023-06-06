import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: black;
  min-height: 10vh;
  background-color: black;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 40%;
  height: 40%;
`;

export const Navigation = styled.div`
  display: flex;
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    font-size: 150%;
  }
  li {
    margin-right: 10vh;
    a {
      color: #fff;
      text-decoration: none;
      border-radius: 10px;
      padding-right: 3vh;
      padding-left: 3vh;
    }
    a:active {
      color: black;
      background-color: white;
    }
    a:hover {
      color: black;
      background-color: white;
    }
  }
`;