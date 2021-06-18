import React from "react";
import {motion} from "framer-motion";
import {pageAnimation, titleAnim} from "../pages/animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop"
const Contact = () => {
    return(
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
         <Title>
             <Hide>
                 <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
             </Hide>

            <Hide>       
                <Social variants={titleAnim}>
                <Circle/>
                <h2>Message</h2>
                </Social>
             </Hide> 

            <Hide>
                <Social variants={titleAnim}>
                <Circle/>
                <h2>
                    Email
                </h2>
                </Social>
             </Hide>

            <Hide>
                <Social variants={titleAnim}>
                <Circle/>
                <h2>Social Media</h2>
                </Social>
             </Hide>


         </Title>

         <ScrollTop />
        </ContactStyle>

    )
};

const ContactStyle = styled(motion.div)`
    padding:5rem 10rem;
    color: #353535;
    min-height:90vh;
    background:#fff;
    @media (max-width:1300px){
        padding:2rem;
        font-size:1rem;
        
    }
`

const Title = styled.div`
    margin-bottom:4rem;
    color:black;
    @media (max-width:1300px){
        margin-top:5rem;
        
    }
`

const Hide = styled.div`
    overflow:hidden;
`
const Circle = styled.div`
    border-radius:50%;
    width:3rem;
    height:3rem;
    background:#353535
`

const Social = styled(motion.div)`
    display:flex;
    align-items: center;
    h2{
        margin:2rem;
    }
`

export default Contact