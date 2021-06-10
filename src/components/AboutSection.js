import React from "react" ;
import wireframe from "../images/wireframe.jpg";
//styled
import {About, Description, Hide, Image} from "../styles"
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





export default AboutSection