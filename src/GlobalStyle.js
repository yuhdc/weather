import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}

html{
    @media (min-width:300px){
        font-size: 75%;
    }  
    @media (min-width:860px){
        font-size: 90%;
    } 
    @media (min-width:1200px){
        font-size: 100%;
    } 
}

body{
    color: white;
    font-family: "Inter",sans-serif;
    overflow-x: hidden;
}

button{
    font-weight:bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: whitesmoke;
    }
}
h1{
    font-weight: bolder;
    font-size: 3.5rem;
}
h2{
    font-weight: lighter;
    font-size: 2.5rem;
    padding-top:0.5rem;
}
h3{
    font-size: 2rem;
}
h4{
    font-weight: normal;
    font-size: 1.5rem;
    padding:0.5rem;
}
a{
    font-size: 1.2rem;
}
span{
    font-weight: 300;
}
p{
    font-size:1.2rem;
}
a{
    text-decoration: none;
    color:inherit
}
`;

export default GlobalStyle;
