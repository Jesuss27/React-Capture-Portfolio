import React from "react";
import styled from "styled-components";
import product1 from "../images/product1.webp"
import product2 from "../images/product2.webp"
import product3 from "../images/product3.webp"
import {Link} from "react-router-dom";
//Animations
import {motion} from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from "../pages/animation"


const Work = () => {
    return(
        <Works variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background:"#ffff"}}>

            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>


            <Example>
                <motion.h1 variants={fade}>Goodfika</motion.h1>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/goodfika">
                    <Hide>
                    <motion.img variants={photoAnim} src={product1} alt="" />
                    </Hide>
                </Link>
            </Example>

            <Example>
                <motion.h1 variants={fade}>Sad Times</motion.h1>
                <motion.div variants={lineAnim}  className="line"></motion.div>
                <Link to="/work/sad-times">
                    <Hide>
                    <motion.img variants={photoAnim} src={product2} alt="" />
                    </Hide>
                </Link>
            </Example>

            <Example>
                <motion.h1 variants={fade}>Metro</motion.h1>
                <motion.div variants={lineAnim}  className="line"></motion.div>
                <Link to="/work/hamlet">
                    <Hide>
                    <motion.img variants={photoAnim} src={product3} alt="" />
                    </Hide>
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
        
    }
`

const Example = styled.div`
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        margin-bottom:3rem;
        background-color:#23d997;
        
    }
    img{
        width:100%;
        height:70vh;
        object-fit: cover;
    }
`
const Hide = styled.div`
    overflow: hidden;
`

const Frame1 = styled(motion.div)`
    position:fixed;
    left:0;
    top:10%;
    width:100%;
    height:100vh;
    background:#fffebf;
    z-index:2;
`

const Frame2= styled(Frame1)`
    background: #ff8efb;

`
const Frame3= styled(Frame1)`
    background: #8ed2ff;

`
const Frame4= styled(Frame1)`
    background: #8effa0;

`



export default Work