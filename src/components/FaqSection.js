import React from "react" ;
import styled from "styled-components";
import {About } from "../styles";
import jsLogo from "../images/jsLogo.png"
import html from "../images/html.png"
import sass from "../images/sass.svg"
import php from "../images/php.png"
import react from "../images/react.png"
 

const FaqSection = () => {
    return(
        <Faq>
            <h1>SKILLS</h1>
            <div className="proficiencies">
                <Proficiency>
                    <img src={jsLogo}></img>

                    <h2>Javascript</h2>
                </Proficiency>
                <Proficiency>
                <img src={html}></img>
                    <h2>HTML</h2>
                </Proficiency>
                <Proficiency>
                <img src={sass}></img>
                    <h2>SASS/SCSS</h2>
                </Proficiency>
                <Proficiency>
                <img src={react}></img>
                    <h2>REACT</h2>
                </Proficiency>
                <Proficiency>
                <img src={php}></img>
                    <h2>PHP</h2>
                </Proficiency>
            </div>
        </Faq>

    )
}

const Faq = styled(About)`
    justify-content: space-evenly;
`

const Proficiency = styled.div`
    display:flex;
    align-items:center;
    img{
        height:18vh;
        width: 10vw;
    }
`

export default FaqSection