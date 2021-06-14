import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {ProductState} from "../components/ProductState"

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
        <Details>
            <Headline>
               <h2>
                   {product.title}
               </h2>
               <img src={product.mainImg} alt="" />
            </Headline>
        </Details>
             )}
        </>

    )

};

const Details = styled.div`

`
const Headline = styled.div`

`

export default ProductDetail