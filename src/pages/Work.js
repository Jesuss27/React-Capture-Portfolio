import React from "react";
import styled from "styled-components";
import product1 from "../images/product1.webp"
import product2 from "../images/product2.webp"
import product3 from "../images/product3.webp"
import {Link} from "react-router-dom";
//Animations
import {motion} from "framer-motion";
import {pageAnimation} from "../pages/animation"


const Work = () => {
    return(
        <Works variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Example>
                <h1>Goodfika</h1>
                <div className="line"></div>
                <Link to="/work/goodfika">
                    <img src={product1} alt="" />
                </Link>
            </Example>

            <Example>
                <h1>Sad Times</h1>
                <div className="line"></div>
                <Link to="/work/sad-times">
                    <img src={product2} alt="" />
                </Link>
            </Example>

            <Example>
                <h1>Metro</h1>
                <div className="line"></div>
                <Link to="/work/hamlet">
                    <img src={product3} alt="" />
                </Link>
            </Example>

            
        </Works>

    )
};

const Works = styled(motion.div)`
    min-height:100vh;
    overflow:hidden;
    padding:5rem 10rem;
    h1{
        padding:1rem 0rem;
        color:#23d997;
    }
`

const Example = styled.div`
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        background:#cccccc;
        margin-bottom:3rem
        
    }
    img{
        width:100%;
        height:70vh;
        object-fit: cover;
    }
`


export default Work