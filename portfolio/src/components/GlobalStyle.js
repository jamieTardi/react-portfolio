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
}

button{
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
    }
span{
    font-weight: bold;
    color: #00D261;
}

a{
    font-size: 1.1rem
}

.svg-icon{
    width: 4rem;
    height: 4rem;
}
`

export default GlobalStyle