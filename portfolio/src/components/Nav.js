import React from 'react'
import styled from 'styled-components'
//import from react router dom to allow linking to pages
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <StyledNav>
            <h1><Link to="/">Jamie Tardi</Link></h1>
            <ul>
                {/* replace a tags with link and to */}
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/projects">My Work</Link></li>
                <li><Link to="/contact-me">Contact Me</Link></li>

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
    padding: 1rem;
    border-radius: 1rem;
    transition: all 1.0s ease;
    &:hover{
        background: #00D261

    }
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