import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion"
import {useLocation} from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
            <h1>
                <Link to="/">Capture</Link>
            </h1>
            <ul >
                <li>
                    <Link to="/">1. About Me</Link>
                    <Line
                        transition={{duration:0.75}}
                        initial={{width:"0%"}}
                        animate={{width: pathname ==="/" ? "50%" : "0%"}} />
                </li>
                <li>
                    <Link to="/work">2. My Work </Link>
                    <Line
                        transition={{duration:0.75}}
                        initial={{width:"0%"}}
                        animate={{width: pathname ==="/work" ? "50%" : "0%"}} />
                </li>
                <li>
                    <Link to="/contact">3. Contact</Link>
                    <Line
                        transition={{duration:0.75}}
                        initial={{width:"0%"}}
                        animate={{width: pathname ==="/contact" ? "50%" : "0%"}} />
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height:8vh;
    display:flex;
    margin:auto;
    justify-content: space-between;
    align-items:center;
    color:white;
    padding:1rem 10rem;
    background:#282828;
    position:sticky;
    top:0;
    z-index:10;
    a{
        color:white;
        text-decoration: none;
        cursor:pointer;
    }
    ul{
        display:flex;
        justify-content: space-between;
        list-style:none;
        width:50%;
    }
    h1{
        font-size:1.5rem;
        font-family: 'Lobster Two', sans-serif;
        font-weight:lighter;
    }
    li{
        position: relative;
    }
    @media (max-width:1300px){
     flex-direction:column;
     padding:1rem;
     ul{
         justify-content: space-around;
         width:100%;
     }   
     li{
         padding:0;
         
     }
     h1{
         display: inline-block;
         margin:2rem;
     }

    }
`

const Line = styled(motion.div)`
    height:0.3rem;
    background:#23d997;
    position:absolute;
    bottom:-20%;
    
`

export default Nav