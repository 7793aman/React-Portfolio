import React from "react"
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import { Github, LeetCode, Linkedin } from "../components/AllSvgs"
import { DarkTheme } from "../components/Theme"
import { motion } from 'framer-motion'

const SocialIcons = (props) => {
    return (
        <Icon className=" animate__animated  animate__fadeInUp">
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/7793aman" }}>
                    <Github width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.linkedin.com/in/aman-al-jain " }}>
                    <Linkedin width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div >
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://leetcode.com/771993aman/" }}>
                    <LeetCode width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <Line color={props.theme} className="line__component" />
        </Icon >
    )
}

const Icon = styled.div`
display:flex;
flex-direction:column;
z-index:3;
position:fixed; 
bottom:0;
&>*:not(:last-child){
    margin:0.5rem 0;
}
`

const Line = styled.span`
width:2px;
height:7rem;
margin-left:0.65rem;
background-color:${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

export default SocialIcons;