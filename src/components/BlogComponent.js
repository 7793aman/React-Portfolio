import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const BlogComponent = (props) => {
    const { name, tags, link, imgSrc } = props.blog;
    return (

        <Box target="_blank" to={{ pathname: link }} variants={BlogComponentConfig}>
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <HashTags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </HashTags>
        </Box>

    )
}

const BlogComponentConfig = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}


const Box = styled(motion(NavLink))`
width:calc(10rem + 15vw);
text-decoration:none;
color:${props => props.theme.body};
height:13rem;
padding:1rem;
border:2px solid ${props => props.theme.text};
backdrop-filter:blur(2px);
box-shadow:0 0 1rem 0 rgba(0,0,0,0.2);
cursor:pointer;
flex:0.5 ;
z-index:999999;
background:smokewhite;

&:hover{
color:${props => props.theme.body};
transform :scale(1.1) !important;
// background-color:${props => props.theme.text};
background:smokewhite;
transition:all 0.4s ease;
}
`

const Image = styled.div`
background-image:${props => `url(${props.img})`};
width:100%;
height:60%;
background-size:cover;
background-position:center;
border:0.5px solid ${props => props.theme.text};
${Box}:hover &{
    border:1px solid ${props => props.theme.body};
} 
`

const Title = styled.h3`
color:inherit;
padding:0.5rem  0;
padding-top:1rem;
font-family: 'Karla', sans-serif;
font-weight:700;
border-bottom: 1px solid ${props => props.theme.text};
`
const HashTags = styled.div`
padding:0.5rem 0; 
`
const Tag = styled.span`
padding: 1rem 0.5rem 1rem 0;
`

export default BlogComponent;