import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <Link to="/">Capture</Link>
            </h1>
            <ul >
                <li>
                    <Link>1. About Me</Link>
                </li>
                <li>
                    <Link>2. My Work </Link>
                </li>
                <li>
                    <Link>3. Contact</Link>
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
`

export default Nav