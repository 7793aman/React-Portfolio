import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Theme";

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme} className="logo__container">
            AJ
        </Logo>
    )
}

const Logo = styled.h1`
display:inline-block;
color:${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family:'Pacifico',cursive;
z-index:3;
`

export default LogoComponent;