import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width:1700px){
        font-size:75%;
    }
    @media (max-width:1300px){
        font-size:80%;
    }
}

body{
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
    
}

.design{
    font-family: 'Lobster Two', sans-serif;
    color: #6dffc9;
}

button{
    font-weight: bold;
    font-family: "Inter", sans-serif;
    font-size: 1.1.em;
    cursor:pointer;
    padding: 1em 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color:white;
    transition: all 0.5s ease;
    &:hover{
        background: #23d997;
        color:white;
    }


}

h2{
    font-weight: lighter;
    font-size: 4em;
}

h3{
    color:white;

}

h4{
    font-weight: bold;
    
}

span{
    font-weight: bold;
    color:#23d997
}
a{
    font-size:1.1rem;
}

p{
    padding:3rem 0rem;
    color:#ccc;
    font-size: 1.4em;
    line-height:150%;
}


`


export default GlobalStyle ;