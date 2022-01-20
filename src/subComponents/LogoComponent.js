import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Theme";
import { NavLink } from "react-router-dom";

const LogoComponent = (props) => {
    return (
        <Logo to={{ pathname: "/" }} color={props.theme} className="logo__container">
            AJ
        </Logo>
    )
}

const Logo = styled(NavLink)`
text-decoration:none;
font-size:2.5vw;
font-weight:700;
display:inline-block;
color:${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family:'Pacifico',cursive;
z-index:9;
`

export default LogoComponent;