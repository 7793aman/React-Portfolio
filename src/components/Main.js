import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import Intro from './Intro.js'
import { motion } from 'framer-motion'

const Main = () => {

    const [click, setClick] = useState(0);
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <MainContainer className="main__container">

            <DarkDiv click={click} className='dark__div' />
            <HeaderPanel className="header__panel">
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <PowerButton />
                <Contact target="_blank" to={{ pathname: "mailto:amanj@vt.edu" }}>
                    <motion.h3
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                        Say hi...
                    </motion.h3>
                </Contact>
            </HeaderPanel>

            <BodyPanel className='body__panel'>
                <LeftPanel className='left__panel'>
                    <div className='work__content'>
                        <Work to="/work" click={click}>
                            <h2>
                                Work
                            </h2>
                        </Work>
                    </div>

                    <SocialIcons className="social__content" theme={click ? 'dark' : 'light'} />
                </LeftPanel>

                <CenterPanel className='center__panel'>
                    <Center onClick={() => handleClick()} click={click} className='center' width={click ? 95 : 175} height={click ? 95 : 175}>
                        <YinYang width={click ? 95 : 175} height={click ? 95 : 175} fill='currentColor' />
                        {!click && <h2>Who am I?</h2>}
                    </Center>
                    <CenterBar click={click}>
                        <About to="/about" click={click}>
                            <motion.h2
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                About
                            </motion.h2>
                        </About>
                        <Skills to="/skills">
                            <motion.h2
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                My Skills
                            </motion.h2>
                        </Skills>
                    </CenterBar>

                </CenterPanel>

                <RightPanel className='right__panel'>
                    <RightPanelContent>
                        <div className='project__content'>
                            <Projects to="/projects">
                                <h2
                                >
                                    Projects
                                </h2>
                            </Projects>
                        </div>
                        <div className='interest__content'>
                            <PersonalInterest to="/blog">
                                <h2>
                                    Blog
                                </h2>
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
display:flex;
flex-direction:column;
background: ${props => props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
h2, h2, h4, h5, h6{
    font-size:20px;
    font-family:'Karla', sans-serif;
    font-weight:500;
    letter-spacing:1px;
}
`

const HeaderPanel = styled.div`
margin:1.5rem 3rem 2rem 3rem;
paddding:1rem;
display:flex;
align-items:center;
justify-content:space-between;
`

const Contact = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
font-size:18px;
z-index:3;
`

const BodyPanel = styled.div`
flex:1;
display:flex;
flex-direction:row;
margin: 0rem 3rem 0rem 3rem;
justify-content:space-between;
`

const LeftPanel = styled.div`
display:flex;
flex-direction:column;
align-items:baseline;

.work__content{
    position:relative;
    top:8em;
    left:-0.75em;
    display:flex;
}

.line__component{
    height:5em;
}
`

const Work = styled(NavLink)`
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:3;
transform: rotate(-90deg);
transition: transform 0.3s ease-in;

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
justify-content:space-around;
flex:auto;
`


const Center = styled.div`
z-index:999;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
h2{
    margin-top:1rem;
}

&>:first-child{
    animation:${rotate} infinite 1.5s linear;
}


transform:${props => props.click ? 'translate(80vw,48vh)' : ''};

width:${props => props.click ? '15%' : ''};
transition:all 1s ease;
`

const CenterBar = styled.div`
display:flex;
flex:0.1;
justify-content: space-around;
align-items: start;
position:relative;
bottom:${props => props.click ? '-5em' : '-2.75em'};
`


const About = styled(NavLink)`
display:flex;
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:3;
`

const Skills = styled(NavLink)`
display:flex;
color:${props => props.theme.text};
text-decoration:none;
z-index:3;
transition : all 1s ease;
`

const RightPanel = styled.div`
display:flex;
justify-content:flex-end;
position:relative;
right:-1em;
top:-2em;
`

const RightPanelContent = styled.div`
height:100%;
display:flex;
justify-content:space-evenly;
flex-direction:column;
`

const PersonalInterest = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
z-index:1;
h2{
transform:rotate(90deg);
transition:transform 0.3s;
};

h2:hover{
transform:scale(1.1) rotate(90deg);
}

`

const Projects = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
z-index:1;
h2{
transform:rotate(90deg);
transition: transform 0.3s;
}

h2:hover{
    transform:scale(1.1) rotate(90deg);
}

margin-top:4rem;
`

const DarkDiv = styled.div`
z-index: 1;
position: absolute;
right:51%;
width:${props => props.click ? '49%' : '0%'};
height:${props => props.click ? '100%' : '0%'};
background:black;
transition: height 0.5s ease, width 1s ease 0.5s ;
`

export default Main;