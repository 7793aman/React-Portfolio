import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import ParticleComponent from "../subComponents/ParticleComponent";
import { motion } from "framer-motion";

const BlogPage = () => {
    return (
        <MainContainer variants={BlogPageConfig}
            initial='hidden'
            animate='show'
            exit={{
                opacity: 0,
                transition:{type:'spring',duration:0.5}
        }}>

            <Container className='container'>
                <ParticleComponent className="particle__component" theme='snow' />
                <HeaderContainer className='header__container'>
                    <LogoComponent theme="dark" />
                    <PowerButton />
                </HeaderContainer>
                <BodyContainer className='body__container'>
                    <LeftContainer className="left__container">
                        <SocialIcons theme="dark" />
                    </LeftContainer>
                    <CenterContainer className='center__container'>
                        <Grid>
                            {
                                Blogs.map(blog => {
                                    return <BlogComponent key={blog.id} blog={blog} />
                                })
                            }

                        </Grid>

                    </CenterContainer>
                    <RightContainer>
                        <AnchorComponent />
                    </RightContainer>
                </BodyContainer>
            </Container>
        </MainContainer>
    )
}

const BlogPageConfig = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
}

const MainContainer = styled(motion.div)`

.particle__component{
    position:fixed;
}
`

const Container = styled.div`
background: linear-gradient(45deg, rgb(69, 72, 77) 0%, rgb(0, 0, 0) 100%);
color:${props => props.theme.body};
`


const HeaderContainer = styled.div`
z-index:9999;
display:flex;
position: fixed;
height:15vh;
width: 100%;
justify-content:flex:start;
align-items:center;
margin:0rem 2rem 0 2rem;
.logo__container{
width:46%;
}

`

const BodyContainer = styled.div`{
display:flex;
height:auto;
}
`

const LeftContainer = styled.div`
margin-left:2em;
height:100vh;
display:flex;
flex-direction:row;
align-items:flex-end;
flex:0.15;
`

const CenterContainer = styled.div`
display:flex;
flex-grow:0.8;
z-index:3;
justify-content:center;
align-items:center; 
padding-top:10em;
padding-bottom:2em;
margin-right:2em;
`

const Grid = styled.div`
display:grid;
grid-template-columns:repeat(2,minmax(calc(14rem + 15vw), 1fr));
grid-gap:3.5rem 2rem;
`

const RightContainer = styled.div`
margin-bottom:2em;

`
export default BlogPage;