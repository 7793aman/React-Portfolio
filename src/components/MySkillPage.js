import React from "react";
import styled, { ThemeProvider } from "styled-components"
import { lightTheme } from "./Theme"
import { Design, Develope } from "./AllSvgs"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from "../subComponents/ParticleComponent";
import { motion } from 'framer-motion'


const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ParticleComponent theme='light' />
            <Container
                initial="initial"
                animate="in"
                exit="out"
                variants={SkillConfig}
            >
                <HeaderContainer>
                    <LogoComponent theme='light' />
                    <PowerButton />
                </HeaderContainer>
                <CenterContainer className="center__container">
                    <LeftContainer>
                        <SocialIcons theme='light' />
                    </LeftContainer>
                    <RightContainer>
                        <Box>
                            <Main className="main__left  animate__animated animate__rotateInUpLeft">
                                <Title>
                                    <Design width={40} height={40} className="title logo" />
                                    <span className="title">Frontend</span>
                                </Title>
                                <Description>
                                    <span> I love to create web design which speaks, Keep it clean, minimal and simple.</span>
                                </Description>
                                <Description>
                                    <strong>Programming</strong>
                                    <ul>
                                        <li>
                                            Javascript, Typescript, HTML5, CSS3.
                                        </li>

                                    </ul>
                                </Description>
                                <Description>
                                    <strong>Tools/Libraries</strong>
                                    <ul>
                                        <li>
                                            Angular8, ReactJs, Vue,js, Bootstrap, JQuery, FramerMotion and HighCharts.
                                        </li>

                                    </ul>
                                </Description>
                            </Main>
                            <Main className="animate__animated animate__rotateInUpRight">
                                <Title>
                                    <Develope className="logo" width={40} height={40} />
                                    <span className="title">Backend</span>
                                </Title>
                                <Description>
                                    <span>I value business which i'm creating, thus i enjoy creating scalable backends and bringing new ideas to life.</span>
                                </Description>
                                <Description>
                                    <strong>Programming</strong>
                                    <ul>
                                        <li>
                                            C#, Java, Node.Js, Python, SQL and C++.
                                        </li>
                                    </ul>
                                </Description>
                                <Description>
                                    <strong>Tools/Libraries</strong>
                                    <ul>
                                        <li>
                                            Asp.net, Git, SVN, BitBucket, Teamcity and Splunk.
                                        </li>

                                    </ul>
                                </Description>
                            </Main>
                        </Box>
                    </RightContainer>

                </CenterContainer>
            </Container>
        </ThemeProvider>
    )
}

const SkillConfig = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5
        }
    },
    out: {
        opacity: 0,
    },
}

const Container = styled(motion.div)`
background-color:${props => props.theme.body};
height:auto;
padding:0 2rem 0 2rem;
`

const HeaderContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:15vh;
`
const CenterContainer = styled.div`
display:flex;
`
const LeftContainer = styled.div`
display:flex;
align-items:flex-end;
`
const RightContainer = styled.div`
`

const Box = styled.div`
background-color:${props => props.theme.body};
width:100vw;
height:85vh;
display:flex;
justify-content:space-evenly;
align-items:center;
margin-left:-1em;
`

const Main = styled.div`
border: 2px solid  ${props => props.theme.text};
color:${props => props.theme.text};
background-color:${props => props.theme.body};
padding:1rem 2rem 3rem 2rem;
width: 30vw;
height:60vh;
z-index:3;
line-height:1.5;

font-family: 'Ubuntu Mono', monospace;
display:flex;
flex-direction:column;
justify-content:space-between;
transition: transform 0.5s ease-out;

&:hover{
    color:${props => props.theme.body};
    background-color:${props => props.theme.text};
    transform :scale(1.1);
    .logo{
        background:white;
    }
}

`
const Title = styled.h2`
display:flex;
justify-content:center;
align-items:center;
font-size:calc(1em+1vw);

.title{
    margin-left:0.5em;
}

${Main}:hover &{
    &>*{
     color:${props => props.theme.body};
    }
}

`
const Description = styled.div`
color:${props => props.theme.text};
font-size:calc(0.4em + 1vw);
padding:0.5rem 0;

strong{
    margin-bottom:1rem;
    text-transform: uppercase;
}

ul,p{
margin-left: 2rem;
}

${Main}:hover &{
    &>*{
     color:${props => props.theme.body};
    }
}

`

export default MySkillsPage