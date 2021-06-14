import React from "react" ;
import wireframe from "../images/wireframe.jpg";
import {About, Description, Hide, Image} from "../styles"
//Framer Motion

import { motion } from "framer-motion";


const AboutSection = () => {

    return(
            <About>
                <Description>
                    <motion.div>
                         <Hide>
                             <motion.h2>
                                 I <span>develop</span> and <span className="design">design</span>
                             </motion.h2>
                         </Hide>
                         <Hide>
                             <motion.h2>
                                 whatever <span>YOU</span>
                             </motion.h2>
                         </Hide>
                         <Hide>
                             <motion.h2>
                                 have in mind
                             </motion.h2>
                         </Hide>
                    </motion.div>
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