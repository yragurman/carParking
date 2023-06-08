import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: black;
  min-height: 100px;
  background-color: #151C28;
  max-width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #FFF;
  margin-left: 80px;
  font-size: 48px;
  margin-right: 485px;
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
    margin-right: 15vh;
    font-size: 5vh;
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