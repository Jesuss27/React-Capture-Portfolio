import React from "react" ;
import wireframe from "../images/wireframe.jpg";
//styled
import styled from "styled-components" ;
const AboutSection = () => {
    return(
            <About>
                <Description>
                    <div className="title">
                         <Hide>
                             <h2>
                                 I <span>develop</span> and <span>design</span>
                             </h2>
                         </Hide>
                         <Hide>
                             <h2>
                                 whatever <span>YOU</span>
                             </h2>
                         </Hide>
                         <Hide>
                             <h2>
                                 have in mind
                             </h2>
                         </Hide>
                    </div>
                    <p>If you are looking to hire a professional with hard skills and a gentle touch to help you build out your next big web project, get in touch with me. </p>
                    <button>CONTACT</button>
                </Description>
                <Image>
                    <img src={wireframe} alt="wireframe sketches" />
                </Image>
            </About>
    )
}

//styled components
const About = styled.div`
    min-height: 90vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem;
    color:white;
    img{
        margin: 0rem 5rem;
        padding: 0rem
    }
` ; 

const Description = styled.div`
    flex: 1;
    padding-right:5rem;
    font-weight:lighter;

`
const Image = styled.div`
    flex:1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit: cover;
    }

`
const Hide = styled.div`
    overflow: hidden;
`




export default AboutSection