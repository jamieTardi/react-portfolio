import React from 'react'
//react links
import {Link} from 'react-router-dom'
//styled components
import styled from 'styled-components'
//pictures import
import quizzicle from '../images/quizzicle.png'
import todoPic from '../images/todo-react.png'
import musicApp from '../images/music-app.png'
import portfolio from '../images/portfolioPic.png'
//framer
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim, fade, photoAnim, projectLineAnim, slider, sliderContainer} from '../animation'

export default function Projects() {
    return (
        <StyledProjects
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit">
                <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
                </motion.div>
            <ProjectApp>
                <motion.h2 variants={fade}>Music Player made in React</motion.h2>
                <motion.div variants={projectLineAnim} className="line"></motion.div>
                <Link to="/projects/music-player">
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={musicApp}
                            alt="A music Player made in react"/>
                            
                            <p>This is a music player that has a working library built in React. Click the picture to see more</p>
                    </Hide>
                </Link>
            </ProjectApp>
            <ProjectApp>
                <motion.h2 variants={fade}>This Portfolio made in React</motion.h2>
                <motion.div variants={projectLineAnim} className="line"></motion.div>
                <Link to="/projects/portfolio">
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={portfolio}
                            alt="Jamie Tardi Portfolio"/>
                            
                            <p>This is my professional portfolio using various NPM packages.</p>
                    </Hide>
                </Link>
            </ProjectApp>
            <ProjectApp>
                <motion.h2>Quiz App</motion.h2>
                <motion.div className="line"></motion.div>
                <Link to="/projects/quizzicle">
                    <motion.img
                        variants={photoAnim}
                        src={quizzicle}
                        alt="A Quiz app built using a RESTful API"/>
                        <p>A quiz app built using a restful API and built in react.</p>
                </Link>
            </ProjectApp>
            <ProjectApp>
                <motion.h2>Classic To Do List</motion.h2>
                <motion.div className="line"></motion.div>
                <Link to="/projects/todo">
                    <motion.img variants={photoAnim} src={todoPic} alt="A todo app made in React"/>
                    <p>The classic to do list written in React</p>
                </Link>
            </ProjectApp>

        </StyledProjects>
    )
}

const StyledProjects = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
@media(max-width: 600px){
    padding: 1rem 1rem;
    h2{
        font-size: 2rem;
    }
}
h2{
    color: white;
    
}
`

const Hide = styled.div `
overflow: hidden;
p{
    text-decoration: none;
}
`

const ProjectApp = styled.div `
padding-bottom: 10rem;
@media(max-width: 500px){
    padding-bottom: 1rem;
}
.line{
height: 0.5rem;
background: #00D261;
margin-bottom: 3rem
}
img{
    width: 100%;
    height: 70vh;
    object-fit: contain;
    @media(max-width: 500px){
        height: 40vh;
    }
    
}
`

//Frame entrance animation

const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top:10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2
`
const Frame2 = styled(Frame1)`
background: #ff8efb;

`
const Frame3 = styled(Frame1)`
background: #8ed2ff;

`

const Frame4 = styled(Frame1)`
background: #00D261;
`