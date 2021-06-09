import React from "react" ;
import wireframe from "../images/wireframe.jpg";
const AboutSection = () => {
    return(
            <div>
                <div className="description">
                    <div className="title">
                         <div className="hide">
                             <h2>
                                 I <span>develop</span> and <span>design</span>
                             </h2>
                         </div>
                         <div className="hide">
                             <h2>
                                 whatever <span>YOU</span>
                             </h2>
                         </div>
                         <div className="hide">
                             <h2>
                                 have in mind
                             </h2>
                         </div>
                    </div>
                    <p>If you are looking to hire a professional with hard skills and a gentle touch to help you build out your next big web project, get in touch with me. </p>
                    <button>CONTACT</button>
                </div>
                <div className="image">
                    <img src={wireframe} alt="wireframe sketches" />
                </div>
            </div>
    )
}

export default AboutSection