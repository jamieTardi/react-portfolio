import React from 'react'
//Icons Imports
import javaIcon from '../icons/javaIcon.svg'
import javascriptIcon from '../icons/javascriptIcon.svg'
import pythonIcon from '../icons/pythonIcon.svg'
import reactIcon from '../icons/reactIcon.svg'
import sass from '../icons/sass.svg'
import laptop from '../images/laptop.svg'
import nodeIcon from '../icons/nodeIcon.svg'
//style import
import styled from 'styled-components'
import {About, Description, Image} from '../styles'
import {scrollReveal} from '../animation'
import {UseScroll} from '../components/UseScroll'

export default function Languages() {
const [element, controls] = UseScroll()
    return (
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Laptop>
            <img src={laptop} alt="Laptop image"/>
            </Laptop>
            <Description>
                <h2>Some of the <span>languages</span> I work with</h2>
                <Cards>
                   
                    <Card>
                        <div className="icon">
                            <img src={javascriptIcon} alt="Javascript icon" className="svg-icon"/>
                            <h3>Javascript</h3>
                        </div>
                        <p className="javascript-blurb">The webs most used programming language, designed to add functionality and useability to webpages. </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={reactIcon} alt="React icon" className="svg-icon"/>
                            <h3>React.js</h3>
                        </div>
                        <p className="React-blurb">A powerful Javascript framework, designed with the scope to create scalable projects. </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={pythonIcon} alt="python icon" className="svg-icon"/>
                            <h3>Python</h3>
                        </div>
                        <p className="python-blurb">The worlds most versatile language.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={nodeIcon} alt="Node icon" className="svg-icon"/>
                            <h3>Node.js</h3>
                        </div>
                        <p className="React-blurb">Server side JavaScript, to bring additional functionality.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={sass} alt="Sass icon" className="svg-icon"/>
                            <h3>Sass</h3>
                        </div>
                        <p className="React-blurb">Css framework Sass for making easy to use stylesheets.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={javaIcon} alt="Java icon" className="svg-icon"/>
                            <h3>Java</h3>
                        </div>
                        <p className="java-blurb">For responsive mobile applications.</p>
                    </Card>
                </Cards>
            </Description>
        </Services>
    )
}

//
const Services = styled(About)`

h2{
    padding-bottom: 5rem;

}

p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem
}`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 15rem;
width: 30vw;
gap: 2rem;

@media (max-width: 600px){
    margin-left: 1rem;
}

`
const Card = styled.div`
flex-basis: 1rem;
.icon{
    display: flex;
    align-items: center;
    h3{
       margin-left: 1rem;
        background: #eeeeee;
        color: #343A40;
        padding: 1rem;
        font-family: 'Lobster', cursive;
    }
}
`

const Laptop = styled(Image)`
width: 60%;
@media (max-width: 600px){
    display: none;
}

`