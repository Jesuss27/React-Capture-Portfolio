import React from "react" ;
import wireframe from "../images/wireframe.jpg";
import {About, Description, Hide, Image} from "../styles"
//Framer Motion

import { motion } from "framer-motion";
import {titleAnim, fade, photoAnim} from "../pages/animation"
import Wave from "./Wave"

const AboutSection = () => {

    return(
            <About>
                <Description>
                    <motion.div>
                         <Hide>
                             <motion.h2 variants={titleAnim}>
                                 I <span>develop</span> and <span className="design">design</span>
                             </motion.h2>
                         </Hide>
                         <Hide>
                             <motion.h2 variants={titleAnim}>
                                 whatever <span>YOU</span>
                             </motion.h2>
                         </Hide>
                         <Hide>
                             <motion.h2 variants={titleAnim}>
                                 have in mind
                             </motion.h2>
                         </Hide>
                    </motion.div>
                    <motion.p variants={fade}>If you are looking to hire a professional with hard skills and a gentle touch to help you build out your next big web project, get in touch with me. </motion.p>
                    <motion.button variants={fade}>CONTACT</motion.button>
                </Description>
                <Image>
                    <motion.img variants={photoAnim} initial="hidden" animate="show" src={wireframe} alt="wireframe sketches" />
                </Image>
                <Wave />
            </About>
    )
}





export default AboutSection