import React from "react";
import Particles from 'react-particles-js';
import styled from "styled-components";
import configDark from "../config/particlesjs-config.json"
import configLight from "../config/particlesjs-config-light.json"
import configNight from "../config/particlesjs-config-night.json"
import configImages from "../config/particlesjs-config-images.json"


const ParticleComponent = (props) => {
    return (
        <Box>
            <Particles style={{ position: 'absolute', top: 0 }} params=
                {props.theme === 'images' ? configImages :
                    props.theme === "light" ? configLight : props.theme === "night" ? configNight : configDark} />
        </Box>
    )
}

const Box = styled.div`
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index:1;
`

export default ParticleComponent 