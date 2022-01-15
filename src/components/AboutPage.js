
import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components"
import { DarkTheme } from "./Theme"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from "../subComponents/ParticleComponent";
import astronaut from "../assets/Images/Astronaut.png"
import { motion } from 'framer-motion'

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <ParticleComponent theme='dark' />
            <Container>
                <HeaderContainer>
                    <LogoComponent className="logo" theme='dark' />
                    <PowerButton theme='dark' />
                </HeaderContainer>
                <CenterContainer className="center__container">
                    <LeftContainer>
                        <SocialIcons theme='dark' />
                    </LeftContainer>
                    <RightContainer>
                        <Main>
                            <div>
                                As a kid, I was always curious and creative. I broke toys apart only to build them up all over again. I still do the same, only through code now. I am truly passionate about writing code and building stuff that can solve real world problems.
                            </div>
                            <br></br>
                            <div>
                                I'm self driven, quick learner, likes to take up challenges and build systems to solve problems. I have a proven track record of successful launches of both new builds and redevelopments of existing projects.
                            </div>
                            <br></br>
                            <div>
                                I believe everything is an Art when you put your consciousness in it.
                            </div>
                        </Main>
                        <Box>
                            <Spaceman>
                                <motion.img src={astronaut} width={265} height={450} alt="spaceman"
                                    initial={{
                                        position: 'relative',
                                        top: '26em',
                                        left: '10em'
                                    }}
                                    animate={{ top: 0, left: '0em' }}
                                    transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}

                                ></motion.img>
                            </Spaceman>
                        </Box>
                    </RightContainer>
                </CenterContainer>
            </Container>
        </ThemeProvider>
    )
}

const Container = styled.div`
background-color:${props => props.theme.body};
height:100vh;
padding:0 2rem 0 2rem;
`

const HeaderContainer = styled.div`
display:flex;
flex:1;
align-items:center;
justify-content:space-between;
height:15vh;
`

const CenterContainer = styled.div`
display:flex;
z-index:9;
`
const RightContainer = styled.div`
flex:1;
display:flex;
align-items:center; 
justify-content:space-around;
`

const LeftContainer = styled.div`
flex:0.1;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};;
padding: 1rem;
width:55vw;
height:65vh;
z-index:3;
line-height:1.5;
display:flex;
flex-direction:column;
font-size: calc(1.5vw);
backdrop-filter:blur(4px);
justify-content:space-around;
font-family:'Ubuntu Mono', monospace;
font-style:italic;
margin-right:3em;
`

const Box = styled.div`
background-color:${props => props.theme.body};
height:85vh;
`

const float = keyframes`
0% {transform : translateY(-10px)}
50% {transform : translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}
`

const Spaceman = styled.div`
animation: ${float} 3s ease infinite;
`


export default AboutPage