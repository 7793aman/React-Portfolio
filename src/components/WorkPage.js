import React from "react";
import styled, { ThemeProvider } from "styled-components"
import { lightTheme } from "./Theme"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from "../subComponents/ParticleComponent";
import { Develope } from "../components/AllSvgs";
import { motion } from "framer-motion";

const WorkPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Container>
                <ParticleComponent theme='light' />
                <HeaderContainer>
                    <LogoComponent className="logo" theme='light' />
                    <PowerButton />
                </HeaderContainer>
                <CenterContainer className="center__container">
                    <LeftContainer>
                        <SocialIcons theme='light' />
                    </LeftContainer>
                    <RightContainer className="right__container">

                        <Main variants={WorkConfig} initial="hidden"
                            animate="show" className="main__left">
                            <WorkExperience>
                                <Develope width={50} height={50} />
                            </WorkExperience>
                            <Content >
                                <TimeLineItem>
                                    <Title>
                                        <div className="first__details">
                                            <Name >ZS Associates </Name>
                                            <Position>| Software Engineer</Position>
                                        </div>

                                        <div>
                                            <Date ><i>Nov 2016 - Jan 2018</i></Date>
                                            <Location>| Pune, India</Location>
                                        </div>
                                    </Title>

                                    <Description>
                                        <ul>
                                            <li>
                                                Migrated legacy application to a modern stack cloud platform to gave a more
                                                unified experience to the user for sales reporting and planning.
                                            </li>
                                            <br></br>
                                            <li>
                                                Engineered a SPA from scratch to enable self serviceability for multiple clients for
                                                configuring plan Parameters for Incentive cycles.
                                            </li>
                                            <br></br>
                                            <li>
                                                Spearheaded a what-if simulation and reporting application for tracking incentive
                                                management .
                                            </li>
                                            <br></br>
                                            <li>
                                                Ideate an new module with a team of 5 in 48 hours as a part of hackathon and
                                                worked single handedly to productionize the product within 2months
                                            </li>
                                            <br></br>
                                            <li>
                                                Automated the legacy application setup through Powershell, improving the setup
                                                time from an hour to 5 minutes.
                                            </li>
                                            <br></br>
                                            <li>
                                                Upgraded the performance by 40% of report generation module via multi threading
                                                and removing redundant code.
                                            </li>
                                            <br></br>
                                            <li>
                                                Technically and functionally mentored five new associates.
                                            </li>
                                        </ul>
                                    </Description>
                                </TimeLineItem>
                            </Content>

                            <Content>
                                <TimeLineItem>
                                    <Title>
                                        <div className="first__details">
                                            <Name >Accenture </Name>
                                            <Position>| Software Developer</Position>
                                        </div>

                                        <div>
                                            <Date ><i>May 2018 - May 2021</i></Date>
                                            <Location>| Pune, India</Location>
                                        </div>
                                    </Title>

                                    <Description>
                                        <ul>
                                            <li>
                                                Developed and Debugged software code for the Java backend of the web
                                                application along with the Unit tests
                                            </li>
                                            <br></br>
                                            <li> Devised Javascript based SQL Injection checks to made application more robust
                                                against the security threats
                                            </li>
                                            <br></br>
                                            <li>
                                                Accelerated the SQL queries by 20% by removing redundant joints and writing
                                                stored procedures to improve the individual API’s response time.

                                            </li>
                                            <br></br>
                                            <li>
                                                Standardized Swagger based API documentation to eliminate 100% manual API
                                                documentation and reducing overall testing efforts.
                                            </li>
                                        </ul>
                                    </Description>
                                </TimeLineItem>
                            </Content>

                            <Content>
                                <TimeLineItem className="timeline">
                                    <Title>
                                        <div className="first__details">
                                            <Name >Curofy </Name>
                                            <Position>| Software Intern</Position>
                                        </div>

                                        <div>
                                            <Date ><i>Dec 2015 - May 2016</i></Date>
                                            <Location>| Delhi, India</Location>
                                        </div>
                                    </Title>

                                    <Description className="last__child">
                                        <ul>
                                            <li>
                                                Wrote scalable REST APIs for Curofy mobile and web apps using Node.js.
                                            </li>
                                            <br></br>
                                            <li>
                                                Optimized the database queries and implemented cache at multiple levels to
                                                provide high performance for reducing the network latency.                                            <br></br>

                                                /</li>
                                            <br></br>
                                            <li>   Developed multiple Frontend dashboard components using React.js. </li>

                                        </ul>
                                    </Description>
                                </TimeLineItem>
                            </Content>
                        </Main>

                    </RightContainer>
                </CenterContainer>
            </Container>
        </ThemeProvider >
    )
}

const WorkConfig = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 2
        }
    }
}

const Container = styled.div`
                background-color:${props => props.theme.body};
                height:100vh;
                display:flex;
                flex-direction:column;
                justify-content:flex-end;
                `

const HeaderContainer = styled.div`
                display:flex;
                justify-content:space-between;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index:9;
                height:15vh;
                align-items:center;
                padding:0 2em 0 2em;

                `

const CenterContainer = styled.div`
                display:flex;
                padding-left:2rem;
                height:85vh;
                `

const LeftContainer = styled.div`
                display:flex;
                align-items:flex-end;
                flex:0.1;
                `

const RightContainer = styled.div`
                display:flex;
                flex:auto;
                height:85vh;
                justify-content:center;
                align-items:center;
                scrollbar-color: rebeccapurple green;

                `
const Main = styled(motion.div)`
                cursor:pointer;
                margin:1em;
                border: 2px solid  ${props => props.theme.text};
                color:${props => props.theme.text};
                background-color:${props => props.theme.body};
                padding:1rem 2rem 0rem 2rem;
                width: 55vw;
                height:73vh;
                z-index:3;
                line-height:1.5;
                font-family: 'Ubuntu Mono', monospace;
                display:flex;
                overflow-y:scroll;
                flex-direction:column;

                ::-webkit-scrollbar {
                    width: 0px;
}

                ::-webkit-scrollbar-track {
                    box - shadow: inset 0 0 5px grey;
                border-radius: 10px;
}

                ::-webkit-scrollbar-thumb {
                    background: black;
                border-radius: 10px;
}
                `
const Content = styled.div`
                .timeline{
                    padding - bottom:0;
}
                `

const TimeLineItem = styled.div`
                border-left: 4px dotted rgba(0,0,0,0.75);
                padding:0 0 2rem 2rem;
                position: relative;

                ::before{
                    content: '';
                position: absolute;
                left: -0.75rem;
                width: 0.75rem;
                height: 0.75rem;
                box-shadow: 0 0 0 0.1875rem rgb(0 0 0 / 25%);
                background-color: white;
                border: 4px solid black;
                top: 9px;
                border-radius: 50%;
                z-index: 1;
}
                `

const Title = styled.h2`
                display:flex;
                flex-direction:column;
                justify-content:flex-start;
                font-weight:100;
                font-size:1rem;

                .first__details{
                    display:flex;
                justify-content:start;
                align-items:baseline;
}
                `



const Name = styled.span`
                margin-right:0.5rem;
                font-size:1.5rem;
                font-weight:700;
                `

const Position = styled.span`
                font-size:1rem;
                font-weight:100;
                `

const Date = styled.span`
                margin-right:0.5rem;
                font-size:0.9rem;
                color: rgba(0,0,0,0.75);
                `

const Location = styled.span`
                font-size:0.9rem;
                color: rgba(0,0,0,0.75);
                `

const Description = styled.div`
                color:${props => props.theme.text};
                font-size:calc(0.4em + 1vw);
                padding-top:0.5rem;
                padding-left:-2rem;
                strong{
                    margin - bottom:1rem;
                text-transform: uppercase;
}

                ul,p{
                    padding - top:1rem;
                margin-left: 1rem;
}

// ${Main}:hover &{
                    //     &>*{
                    //      color:${props => props.theme.body};
                    //     }
                    // }
                    `

const WorkExperience = styled.div`
align-self:center;
                `
export default WorkPage