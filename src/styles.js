import styled from "styled-components";

export const About = styled.div`
    min-height: 90vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem;
    color:white;
    img{
        margin: 0rem 5rem;
        padding: 0rem
    }
` ; 

export const Description = styled.div`
    flex: 1;
    flex-basis:15rem;
    padding-right:5rem;
    font-weight:lighter;

`
export const Image = styled.div`
    flex:1;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit: cover;
    }

`
export const Hide = styled.div`
    overflow: hidden;
`
