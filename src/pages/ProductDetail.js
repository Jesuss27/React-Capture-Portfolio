import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {ProductState} from "../components/ProductState"
import {motion} from "framer-motion";
import {pageAnimation}from "../pages/animation"
import ScrollTop from "../components/ScrollTop"
const ProductDetail = () => {
    const history = useHistory()
    const url = history.location.pathname
    const [products, setProducts] = useState(ProductState);
    const [product, setProduct] = useState(null); 

    useEffect(() => {
        const currentProduct = products.filter((ProductState) => ProductState.url === url);
        setProduct(currentProduct[0]);
    },[product,url])


    return(
        <>
        {product && (
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Headline>
               <h2>
                   {product.title}
               </h2>
               <img src={product.mainImg} alt="" />
            </Headline>
            <Awards>
                {product.awards.map(award =>(
                    <Award title={award.title} description={award.description} key={award.title}/>
                ))}

            </Awards>

            <ScrollTop />
        </Details>
             )}
        </>

    )

};

const Details = styled(motion.div)`
    color:white;
    
`
const Headline = styled.div`
    min-height:90vh;
    padding-top:20vh;
    position:relative;
    
    h2{
        position:absolute;
        top:10%;
        left:50%;
        transform: translate(-50%, -10%);
        color:#23d997;
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`
const Awards = styled.div`
    min-height:80vh;
    display:flex;
    margin:5rem 10rem;
    align-items:center;
    justify-content: space-around;
    @media (max-width:1300px){
        display:block;
        margin:2rem;
    }

`

const AwardStyle = styled.div`
    padding:5rem;
    h3{
        font-size:2rem;
    }
    .line{
        width:50%;
        background:#23d997;
        height:0.5rem;
        margin:1rem 0rem;

    }
    p{
        padding:2rem 0rem;
    }
    
`

const Award = (props) => {
    return(
        <AwardStyle>
            <h3>{props.title}</h3>
            <div className="line"></div>
            <p>{props.description}</p>

        </AwardStyle>

    )
}

export default ProductDetail