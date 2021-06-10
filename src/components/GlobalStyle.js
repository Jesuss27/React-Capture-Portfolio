import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    
}

button{
    font-weight: bold;
    font-size: 1.1.em;
    cursor:pointer;
    padding: 1em 1rem;
    border: 3px solid #23d997;
    background: transparent;
    color:white;
    transition: all 0.5s ease;
    &:hover{
        background: #23d997;
        color:white;
    }


}

img{
    max-width: 40vw;
}

h2{
    font-weight: lighter;
    font-size: 3em;
}

h3{
    color:white;

}

p{
    padding:3em 0em;
    color:#ccc;
    font-size: 1.4em;
    line-height:150%;
}

`


export default GlobalStyle ;