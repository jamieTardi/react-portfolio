import React from 'react'
//react links
import {Link, Switch, Route} from 'react-router-dom'
//styled components
import styled from 'styled-components'
//pictures import
import quizzicle from '../images/quizzicle.png'
import todoPic from '../images/todo-react.png'
import musicApp from '../images/music-app.png'
//framer
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation'

export default function Projects() {
    return (
        <StyledProjects variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <ProjectApp>
                <h2>Project 1</h2>
                <div className="line"></div>
                <Link to="/projects/music-player">
                    <img src={musicApp} alt="A music Player made in react"/>
                </Link>
            </ProjectApp>
            <ProjectApp>
                <h2>Project 2</h2>
                <div className="line"></div>
                <Link to="/projects/quizzicle">
                    <img src={quizzicle} alt="A Quiz app built using a RESTful API"/>
                </Link>
            </ProjectApp>
            <ProjectApp>
                <h2>Project 1</h2>
                <div className="line"></div>
                <Link to="/projects/todo">
                    <img src={todoPic} alt="A todo app made in React"/>
                </Link>
            </ProjectApp>
            
        </StyledProjects>
    )       
}

const StyledProjects = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem
`

const ProjectApp = styled.div`
padding-bottom: 10rem;
.line{
height: 0.5rem;
background: #cccccc;
margin-bottom: 3rem
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover
}
`