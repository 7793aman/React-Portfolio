import React from "react";
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'
import { motion } from 'framer-motion'

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '18em' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Aman Jain</h3>
                    <h6>I am a full-stack developer, currently pursuing Master's at Virginia Tech.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>

        </Box>
    )
}


const Box = styled(motion.div)`
position:absolute;
left:49%;
top:50%;
transform :translate(-50%, -50%);
width:56%;
height:18rem;
display:flex;
z-index:3;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50% ) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;

background-repeat: no-repeat;
background-size:100% 2px;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
`

const SubBox = styled.div`
width:50%;
position:relative;
display:flex;
.pic{
    position:absolute;
    bottom:0;
    left:50%;
    transform:translate(-50%,0%);
    width:100%;
    height:auto;
}
`

const Text = styled.div`
font-size:1.2rem;
color:${props => props.theme.body};
padding:2rem;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:space-evenly;

&>*:last-child{
    color:${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size:1.15rem;
    font-weight:300;
}

h3,h6{
margin-top:1rem;
}
`
export default Intro;