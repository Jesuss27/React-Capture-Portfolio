import React from "react";
import styled from "styled-components";
import product1 from "../images/product1.webp"
import product2 from "../images/product2.webp"
import product3 from "../images/product3.webp"
import {Link} from "react-router-dom";


const Work = () => {
    return(
        <Works>
            <Example>
                <h1>Goodfika</h1>
                <div className="line"></div>
                <Link>
                    <img src={product1} alt="" />
                </Link>
            </Example>

            <Example>
                <h1>Sad Times</h1>
                <div className="line"></div>
                <Link>
                    <img src={product2} alt="" />
                </Link>
            </Example>

            <Example>
                <h1>Metro</h1>
                <div className="line"></div>
                <Link>
                    <img src={product3} alt="" />
                </Link>
            </Example>

            
        </Works>

    )
};

const Works = styled.div`
    min-height:100vh;
    overflow:hidden;
    padding:5rem 10rem;
    h2{
        padding:1rem 0rem;
    }
`

const Example = styled.div`
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        background:#cccccc;
        margin-bottom:3rem
        
    }
    img{
        width:100%;
        height:70vh;
        object-fit: cover;
    }
`


export default Work