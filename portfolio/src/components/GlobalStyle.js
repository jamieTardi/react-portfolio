import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #343a40;
    font-family: 'Montserrat', sans-serif;
    width: 100vw;
}

button, .inputBtn{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #00D261;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #00D261;
        color: white;
    }
   
}

.contact-button{
    margin-top: 3rem;
}
h2{
        font-weight: lighter;
        font-size: 3rem;
            }
    h3{
        color: white
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    h4{
        font-weight: bold;
        color: #00D261;
        font-size: 2rem;
    }
span{
    font-weight: 1000;
    color: #00D261;
    
}
.MuiButton-label{
    color: black;

}


a{
    font-size: 1.1rem;
    text-decoration: none;
    color: white;
}

.svg-icon{
    width: 4rem;
    height: 4rem;
}


form{
    
display: flex;
flex-direction: column;
width: 40vw;
height: fit-content;
gap: 1rem;

@media (max-width: 800px){
    width: 90vw;

    
}

}
`

export default GlobalStyle