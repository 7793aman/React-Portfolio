import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import music from "../assets/audio/Ludovico-Einaudi-Primavera.mp3"


const SoundBar = (props) => {
    const ref = useRef(null);
    const [click, setClick] = useState(0);

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        }
        else {
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <audio src={music} ref={ref} loop></audio>
        </Box>
    )
}

const play = keyframes`
0%{
    transform: scaleY(1);
}
50%{
    transform: scaleY(2);
}
100%{
    transform: scaleY(1);
}
`


const Box = styled.div`
z-index:9999;
display:flex;
cursor:pointer;
position:fixed;
left:9rem;
top:2.5rem;

&>*: nth-child(1){
animation-delay:0.2s;
}


&>*: nth-child(2){
animation-delay: 0.3s;
}


&>*: nth-child(3){
animation-delay: 0.4s;
}


&>*: nth-child(4){
animation-delay: 0.8s;
}


&>*: nth-child(5){
animation-delay: 0ms.2s;
}



&>*: nth-child(1){
animation-delay: 0ms.2s;
}

`
const Line = styled.span`
z-index:10;
height:1rem;
width:0.15rem;
margin-right:0.25rem;
background: ${props => props.theme.text};
border: 1.5px solid ${props => props.theme.body};
animation:${play} 1s ease infinite;
animation-play-state:${props => props.click ? "running" : "paused"};
`

export default SoundBar;