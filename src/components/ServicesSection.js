import React from "react"; 
import clock from "../images/clock.svg"
import diaphragm from "../images/diaphragm.svg"
import money from "../images/money.svg"
import teamwork from "../images/teamwork.svg"
import workStation from "../images/workStation.jpg"
import {About, Description, Hide, Image} from "../styles"
import styled from "styled-components";

import {useInView} from "react-intersection-observer" ;
import {useAnimation} from "framer-motion" ;
import {fade} from "../pages/animation"
import {UseScroll} from "./useScroll"

const ServicesSection = () => {
    const [element, controls] = UseScroll();

    return(
        <Services variants={fade} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>Top <span>Quality</span> Service</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Precise</h3>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Cooperative</h3>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Affordable</h3>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                   
                </Cards>
            </Description>
            <Image>
                    <img src={workStation} alt="" />
            </Image>
        </Services>

    )
}

const Services = styled(About)`
    img{
        margin:0;
    }
    h2{
        padding-bottom:5rem;
    }
    p{
        width:70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
        display:flex;
        flex-wrap:wrap;
        @media (max-width:1300px){
            justify-content: center;
    }
`
const Card = styled.div`
    flex-basis: 15rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background:white;
            color:black;
            padding:1rem;
        }
    }
`


export default ServicesSection