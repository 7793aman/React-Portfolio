import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, Anchor } from "../components/AllSvgs";

const AnchorComponent = () => {

    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
            let diffP = (diff * 90) / (bodyHeight - windowSize +20);

            if (ref.current) {
                ref.current.style.transform = `translateY(${-diffP}%)`;

            }

        }

        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <Container>
            <Slider ref={ref}>
                {
                    [...Array(25)].map((x, id) => (
                        <Link key={id} width={25} height={25} fill='currentColor' className="chain" />
                    ))
                }
                < Anchor width={70} height={70} fill='currentColor' />

            </Slider>

            <PreDisplay ref={hiddenRef} >
            </PreDisplay>
        </Container>
    )
}

const Container = styled.div`
position:relative; 
`
const Slider = styled.div`
position:fixed;
top:0em;
right:2em;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transform: translateY(-89%);
.chain{
    transform:rotate(135deg);
}
`


const PreDisplay = styled.div`
position:fixed;
top:3em;
right:2rem;
`
export default AnchorComponent;