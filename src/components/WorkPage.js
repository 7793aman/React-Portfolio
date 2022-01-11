import React from "react";
import styled, { ThemeProvider } from "styled-components"
import { lightTheme } from "./Theme"
import { Design, Develope } from "./AllSvgs"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import ParticleComponent from "../subComponents/ParticleComponent";

const WorkPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ParticleComponent theme='light' />
            <Container>

                <HeaderContainer>
                    <LogoComponent className="logo" theme='light' />
                    <PowerButton />
                </HeaderContainer>
                <CenterContainer className="center__container">
                    <LeftContainer>
                        <SocialIcons theme='light' />
                    </LeftContainer>
                    <RightContainer className="right__container">
                        <Main className="main__left">
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
                                                Migrated legacy application to a modern stack cloud platform to gave a more unified experience to the user for sales reporting and planning.
                                            </li>
                                            <br></br>
                                            <li>
                                                Implemented a SPA from scratch to enable self serviceability for multiple clients for configuring  plan Parameters for Incentive cycles.
                                            </li>
                                            <br></br>
                                            <li>
                                                Implemented frontend for a dashboard and widget based web application along with enabled what-if simulating behavior.
                                            </li>
                                            <br></br>
                                            <li>
                                                Implemented a PowerShell script to automate the legacy application setup, reducing the setup time from an hour to 5 minutes.
                                            </li>
                                            <br></br>
                                            <li>
                                                Implemented a generic programming pattern to reduce the duplicity of code at the backend and increasing code readability.
                                            </li>
                                            <br></br>
                                            <li>
                                                Improved performance for the legacy application by removing an optimizing redundant code
                                            </li>
                                            <br></br>
                                            <li>
                                                Technically and  functionally mentored five new associates.
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
                                                Designed, Developed and Debugged software code for the Java backend of the web application along with the Unit tests.                                            </li>
                                            <br></br>
                                            <li>
                                                Implemented Javascript based SQL Injection checks to made application more robust against the security threats.
                                            </li>
                                            <br></br>
                                            <li>
                                                Optimized the SQL queries by removing redundant joints and writing stored procedures to reduce the individual API's response time. </li>
                                            <br></br>
                                            <li>
                                                Implemented Swagger based API documentation to eliminate manual API documentation and reduce overall testing team efforts top//#region </li>
                                        </ul>
                                    </Description>
                                </TimeLineItem>
                            </Content>

                            <Content>
                                <TimeLineItem>
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

                                    <Description>
                                        <ul>
                                            <li>
                                                Implemented Swagger based API documentation to eliminate manual API documentation and reduce overall testing team efforts
                                            </li>
                                            <br></br>
                                            <li>
                                                Optimized the SQL queries by removing redundant joints and writing stored procedures to reduce the individual API's response time.                                            </li>
                                            <br></br>
                                            <li>
                                                Developed various Frontend dashboard components using React.js. </li>
                                            <br></br>
                                            <li>
                                                Implemented Swagger based API documentation to eliminate manual API documentation and reduce overall testing team efforts                                            </li>
                                            <br></br>
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

const Container = styled.div`
background-color:${props => props.theme.body};
height:100vh;
width:100%;
`

const HeaderContainer = styled.div`
display:flex;
width: 100%;
justify-content:flex:start;
align-items:center;
padding:0 2em 0 2em;
height:15vh;
.logo__container{
width:48%;
margin-left:0.25em;
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
justify-content:center;
align-items:start;
scrollbar-color: rebeccapurple green;
`
const Main = styled.div`
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
justify-content:space-between;

// &:hover{
//     color:${props => props.theme.body};
//     background-color:${props => props.theme.text};

::-webkit-scrollbar-thumb {
        background: white; 
        color:white
}
}

::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: black; 
  border-radius: 10px;
}
`

const Content = styled.div`

`
const TimeLineItem = styled.div`
    border-left: 4px dotted darkslategray;
    padding:0 0 2rem 1.5rem;
    position: relative;

    &:first-child{

    }
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
// ${Main}:hover &{
//     &>*{
//      color:${props => props.theme.body};
//     }
// }

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
    margin-bottom:1rem;
    text-transform: uppercase;
}

ul,p{
padding-top:1rem;
margin-left: 1rem;
}

// ${Main}:hover &{
//     &>*{
//      color:${props => props.theme.body};
//     }
// }
`

export default WorkPage