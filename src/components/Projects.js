
import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components"
import { DarkTheme } from "./Theme"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from "../subComponents/ParticleComponent";
import { Projects } from "../data/ProjectData";
import Card from "../subComponents/Card"
import { YinYang } from "./AllSvgs";
import { motion } from "framer-motion";

const ProjectPage = (props) => {
    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            if (element) { element.style.transform = `translateX(${-window.pageYOffset}px)` };
            if (yinyang.current) { yinyang.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)' };
        }

        window.addEventListener('scroll', rotate);

    }, [])

    return (
        <ThemeProvider theme={DarkTheme}>
            <Container>
                <ParticleComponent theme='night' />
                <HeaderContainer>
                    <LogoComponent className="logo" theme='dark' />
                    <PowerButton theme='dark' />
                </HeaderContainer>
                <CenterContainer className="center__container">
                    <LeftContainer>
                        <SocialIcons theme='dark' />
                    </LeftContainer>
                    <RightContainer>
                        <Main ref={ref} variants={FramerConfig} initial="hidden"
                            animate="show">
                            {
                                Projects.map(d =>
                                    <Card key={d.id} data={d} theme="dark" />
                                )
                            }

                        </Main>

                    </RightContainer>
                    <Rotate ref={yinyang}>
                        <YinYang width={80} height={80} fill={DarkTheme.text} />
                    </Rotate>
                </CenterContainer>
            </Container>
        </ThemeProvider>
    )
}

//Framer motion configuration
const FramerConfig = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 0.3
        }
    }
}


const Container = styled.div`
background-color:${props => props.theme.body};
height:400vh;
padding:0 2em 0 2em;
`

const HeaderContainer = styled.div`
position:fixed;
top:0;
right:2rem;
left:2rem;
display:flex;
height:15vh;
z-index:99999999;
align-items:center;
justify-content:space=between;
`

const CenterContainer = styled.div`
display:flex;
z-index:9999;
height:100%;
`
const RightContainer = styled.div`
flex:1;
display:flex;
align-items:flex-start;
justify-content:flex-start;
position:relative;
`

const LeftContainer = styled.div`
flex:0.1;
`

const Main = styled(motion.ul)`
z-index:99999;
position:fixed;
top:10.75rem;
left:calc(10rem);
height:45vh;
display:flex;
color:${props => props.theme.text};
`

const Rotate = styled.span`
display:block;
position:fixed;
bottom:1rem;
right:1rem;
z-index:99999;
`

export default ProjectPage