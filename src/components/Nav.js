import React from "react";
import styled from "styled-components";

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <a href="#">Capture</a>
            </h1>
            <ul >
                <li>
                    <a>1. About Me</a>
                </li>
                <li>
                    <a>2. My Work </a>
                </li>
                <li>
                    <a>3. Contact</a>
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