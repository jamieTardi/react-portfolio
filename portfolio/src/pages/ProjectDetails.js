import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { ProjectState } from '../ProjectState'
import gitHub from '../icons/github.svg'
import netlify from '../images/netlify.svg'
//framer import
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'


export default function ProjectDetails() {
    const history = useHistory()
    const url = history.location.pathname
    const [projects, setProjects] = useState(ProjectState)
    const [project, setProject] = useState(null)
    


    useEffect(() => {
        const currentProject = projects.filter((ProjectObject) => ProjectObject.url === url)
        setProject(currentProject[0])
    }, [projects, url])
    console.log(project)
    
    return (
        <>
        {project && (
        <ProjectDetailsStyled variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <Headline>
    <h2>{project.title}</h2>
    </Headline>
        <p>{project.projectInfo}</p>
        <ImageAndText>
        <p><a href={project.gitHub} target="_blank">Link to the Project Code <img src={gitHub} alt="Github Link"/></a></p>
    <img src={project.mainPic} alt={project.altBlurb}/>
     <p><a href={project.projectLink} target="_blank">Link to the live project <img src={netlify} alt="Netlify Link"/> </a></p> 
     </ImageAndText>      
        </ProjectDetailsStyled>
        )}
        </>
    )
}

const ProjectDetailsStyled = styled(motion.div)`
padding: 5rem 5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

img{
    max-width: 50vw;
    min-height: 50vh;
    padding: 0rem 1rem;  
}
h2{
    color: #cccccc

    
}


`
const ImageAndText = styled.div`
display: flex;
p{
    display: flex;
    justify-content: center;
    width: 20vw;
height: 20vh;
position: relative;
font-size: 0.4rem;
line-height: 1rem;
}
a {
cursor: pointer;
text-decoration: none;
color: #cccccc;
position: absolute;

img{
    width: 100px;
    height: 100px;
    position: absolute;
    top: -30%;
    left: 30%;
    &:hover{
        opacity: 0.7;
    }
    
}
}
`

const Headline = styled.div`

`
