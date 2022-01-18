import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import Intro from './Intro.js'
import { motion } from 'framer-motion'
import "../App.css"
import "normalize.css"
const Main = () => {

    const [click, setClick] = useState(0);
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <MainContainer>
            <DarkDiv click={click} className='dark__div' />
            <HeaderPanel>
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <PowerButton />
                <Contact target="_blank" to={{ pathname: "mailto:amanj@vt.edu" }}
                    className="animate__animated animate__fadeInDown">
                    <motion.h3
                        whileTap={{ scale: 0.9 }}
                    >
                        Say hi...
                    </motion.h3>
                </Contact>
            </HeaderPanel>

            <BodyPanel >
                <LeftPanel>
                    <div className='animate__animated animate__fadeInLeft'>
                        <Work to="/work" click={click}>
                            <motion.h2
                                whileTap={{ scale: 0.9 }}
                            >
                                Work
                            </motion.h2>
                        </Work>
                    </div>
                    <div className="social__content">
                        <SocialIcons theme={click ? 'dark' : 'light'} />
                    </div>
                </LeftPanel>

                <CenterPanel className='center__panel ' click={click}>
                    {!click && <Center click={click} className='animate__animated animate__zoomIn yin_yang'>
                        <YinYang onClick={() => handleClick()} width={click ? 95 : 180} height={click ? 95 : 180} fill='currentColor' style={{ cursor: 'pointer' }} />
                        {!click && <h2>Who am I?</h2>}
                    </Center>}

                    {click ? <Center click={click} className='yinyang__clicked animate__animated animate__zoomIn'>
                        <YinYang onClick={() => handleClick()} width={click ? 95 : 180} height={click ? 95 : 180} fill='currentColor' style={{ cursor: 'pointer' }} />
                        {!click && <h2>Who am I?</h2>}
                    </Center> : ''}


                    <CenterBar click={click} className='center__bar'>
                        <About to="/about" click={click} className="animate__animated animate__fadeInUp">
                            <motion.h2
                                whileTap={{ scale: 0.9 }}
                            >
                                About
                            </motion.h2>
                        </About>
                        <Skills to="/skills" className="animate__animated animate__fadeInUp">
                            <motion.h2
                                whileTap={{ scale: 0.9 }}
                            >
                                Skills
                            </motion.h2>
                        </Skills>
                    </CenterBar>

                </CenterPanel>

                <RightPanel className='right__panel'>
                    <RightPanelContent>
                        <div className='project__content animate__animated animate__fadeInRight'>
                            <Projects to="/projects" >
                                <motion.h2
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Projects
                                </motion.h2>
                            </Projects>
                        </div>
                        <div className='interest__content animate__animated animate__fadeInRight'>
                            <PersonalInterest to="/blog">
                                <motion.h2
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Blog
                                </motion.h2>
                            </PersonalInterest>
                        </div>

                    </RightPanelContent>

                </RightPanel>
            </BodyPanel>

            {click ? <Intro /> : null}
        </MainContainer >
    )
}


const MainContainer = styled.div`
overflow:hidden;
display:flex;
flex-direction:column;
background: ${props => props.theme.body};
height:98vh;
position:relative;
padding:0.25rem 2rem;
h2, h2, h4, h5, h6{
    font-size:22px;
    font-family:'Karla', sans-serif;
    font-weight:500;
    letter-spacing:1px;
}

`

const HeaderPanel = styled.div`
height:15vh;
display:flex;
align-items:center;
justify-content:space-between;

`

const Contact = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
font-size:18px;
z-index:9;
transition: transform 0.2s ease-in;

&:hover{
    transform:scale(1.1);
}
`

const BodyPanel = styled.div`
flex:1;
display:flex;
flex-direction:row;
justify-content:space-between;
height:85vh;
position:relative;
`

const LeftPanel = styled.div`
display:flex;
flex-direction:column;
align-items:baseline;
`

const Work = styled(NavLink)`
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:3;
transform: rotate(-90deg);
transition: transform 0.2s ease-in;
    position:relative;
    top:9rem;
    left:-0.75em;
    display:flex;


&:hover{
    transform:scale(1.1) rotate(-90deg);
}
`
const rotate = keyframes`
from{
transform:rotate(0);
}
to{
transform:rotate(360deg);
}
`

const CenterPanel = styled.div`
display:flex;
flex-direction:column;
justify-content:${props => props.click ? 'end' : 'space-between'};
flex:auto;
`


const Center = styled.div`
z-index:9;
display:flex;
flex-direction:column;
align-items:center;
width:${props => props.click ? '0%' : ''};
margin-top:4rem;
position:${props => props.click ? "absolute" : ""};
bottom:${props => props.click ? "1vh" : ""};
right:${props => props.click ? "1em" : ""};

margin-right:${props => props.click ? '2vw' : ''};

h2{
    margin-top:1rem;
}

&>:first-child{
    animation:${rotate} infinite 1.5s linear;
}

`

const CenterBar = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
position:relative;
`

const About = styled(NavLink)`
display:flex;
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:9;

h2:hover{
    transform:scale(1.1) !important;
    transition: transform 0.2s ease-in !important;
}
`

const Skills = styled(NavLink)`
display:flex;
color:${props => props.theme.text};
text-decoration:none;
z-index:9;
transition: transform 0.2s ease-in;
h2:hover{
    transform:scale(1.1) !important;
    transition: transform 0.2s ease-in !important;
}
`

const RightPanel = styled.div`
display:flex;
justify-content:flex-end;
position:relative;
right:-1em;
top:-2em;
`

const RightPanelContent = styled.div`
height:93%;
display:flex;
justify-content:space-around;
flex-direction:column;
margin-top:1em;
`

const PersonalInterest = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
z-index:9;

transform:rotate(90deg);
display:block;
transition: transform 0.2s ease-in;
&:hover
 {
  transform:scale(1.1) rotate(90deg);
 }
`

const Projects = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
z-index:1;
margin-top:2rem;
transform:rotate(90deg);
display:block;
transition: transform 0.2s ease-in;
&:hover
 {
  transform:scale(1.1) rotate(90deg);
 }

`

const DarkDiv = styled.div`
position: absolute;
right:51%;
width:${props => props.click ? '49%' : '0%'};
height:${props => props.click ? '100%' : '0%'};
background:black;
transition: height 0.5s ease, width 1s ease 0.5s ;
`

export default Main;