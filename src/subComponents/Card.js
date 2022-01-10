import React, { useEffect, useReducer, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github } from "../components/AllSvgs"
import { DarkTheme } from "../components/Theme";
const Card = (props) => {


    const { id, name, description, tags, github } = props.data;
    return (
        <Box key={id}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link to={{ pathname: `${github}` }} target="_blank" className="link__container">
                    Visit
                    <Github className="github__logo" width={20} height={20} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </Link>

            </Footer>
        </Box>
    )
}

const Link = styled(NavLink)`
display:block;
display:flex;
align-items:center;
justify-content:space-evenly;
background-color:${props => props.theme.body};
color:${props => props.theme.body};
text-decoration:none;
width:7em;
padding:0.5em;
border-radius: 0 0 0 50px;
font-size: calc(1rem + 0.3vw);
color:${props => props.theme.text};
}
`

const Box = styled.li`
z-index:999;
width: 18rem;
height:43vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right:8rem;
border-radius:0 50px 0 50px;
display:flex;
flex-direction:column;
justify-content: space-between;
border:1px sol id ${prop => prop.theme.body};
transition: all 0.5s ease;
cursor:pointer;
&: hover{
    transform:scale(1.1);
    background-color:${props => props.theme.body};
    color:${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
    .link__container{
          background-color:${props => props.theme.text};
          color:${props => props.theme.body};
    }
     .github__logo{
    background-color:${props => props.theme.body};
}
`

const Title = styled.h2`
font-size:calc(1rem + 0.5vw);

`

const Description = styled.h4`
font-size:calc(0.8rem + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight:500;
`

const Tags = styled.div`
display:flex;
flex-wrap:wrap;
padding-top: 0.5rem;
border-top:2px solid ${props => props.theme.body};
font-size:calc(0.8rem + 0.2vw);
font-weight:100;

${Box}:hover &{
border-top: 2px solid ${props => props.theme.text};
}

`

const Tag = styled.span`
margin-right: 0.7rem;
padding-top: 0.3rem;
`

const Footer = styled.footer`
display:flex;
justify-content:center;
align-items:end;
`


export default Card;