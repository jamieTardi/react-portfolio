import React from 'react'
import styled from 'styled-components'

export default function Nav() {
    return (
        <StyledNav>
            <h1><a href="#">Jamie Tardi</a></h1>
            <ul>
                <li><a href="#">About Me</a></li>
                <li><a href="#">My Work</a></li>
                <li><a href="#">Contact Me</a></li>

            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`

min-height: 10vh;
display: flex;
margin: auto;
align-items: center;
justify-content: space-between;
padding: 1rem 10rem;
background: hsl(210, 10%, 33%);
a{
    text-decoration: none;
    color: white;
    cursor: pointer;
}
ul{
    list-style-type: none;
    display: flex;
    gap: 3rem
}

li{
    position: relative;
}

h1 > a{
    font-family: 'Lobster', cursive;
    font-size: 1.3rem;
    font-weight: lighter;
}
`