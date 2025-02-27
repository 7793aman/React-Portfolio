import React from "react";
import styled from 'styled-components'
import Me from '../assets/Images/profile-img.png'
import { motion } from 'framer-motion'
import "animate.css";

const Intro = () => {
    return (
        <Box className="intro__box"
            initial={{ height: 0 }}
            animate={{ height: '18em' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text className="intro__content">
                    <h1>Hi,</h1>
                    <h3>I'm Aman Jain</h3>
                    <p>I am currently pursuing Master's at Virginia Tech and have four years of exprience as a full-stack developer.</p>
                </Text>
            </SubBox>
            <SubBox >
                <motion.div className="animate__animated animate__fadeInDown img__box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <img className="pic" width={375} height={400} src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>

        </Box>
    )
}


const Box = styled(motion.div)`
position:absolute;
left:48%;
top:53%;
transform :translate(-50%, -50%);
width:52%;
height:45vh !important;
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

position:relative;
display:flex;
flex:0.5;

.img__box{
    width:100%;
    display:flex;
    justify-content:center;
}
.pic{
     position:absolute;
     bottom:0;

}
`

const Text = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
font-size:2vw;
color:${props => props.theme.body};
padding:2rem;
cursor:pointer;

&>*:last-child{
    color:${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size:1.4vw;
}
`
export default Intro;