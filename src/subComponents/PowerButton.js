import React from "react";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { PowerBtn } from '../components/AllSvgs'
function PowerButton() {
    return (

        <ButtonContainer to="/" className="button__container">
            <Power className="power__button__circle">
                <PowerBtn width={30} height={30} full='currentColor' />
            </Power>
        </ButtonContainer>

    )
}

const ButtonContainer = styled(NavLink)`
justify-self:center;
display:flex;
flex:auto;
justify-content:center;
position:relative;
`

const Power = styled.button`
z-index: 99999;
display: flex;
justify-content: center;
align-items: center;
background-color:#FCF6F4;   
border-radius:50%;
border:1px solid #000;
width:2.75rem;
height:2.75rem;
cursor:pointer;
transition: transform 0.5s ease, border 2s ease;

&>*:first-child{
    text-decoration:none;
    color:inherit;  
}

&:hover{
    border:none;
    transform:scale(1.2);
}
`

export default PowerButton;