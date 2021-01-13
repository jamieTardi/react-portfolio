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
    }, [url])
    
    
    return (
        <>
        {project && (
        <ProjectDetailsStyled variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <Headline>
    <h2>{project.title}</h2>
    </Headline>
        <p>{project.projectInfo}</p>
        <ImageAndText>
        <p className="gitHubClass"><a href={project.gitHub} target="_blank" rel="noreferrer">Link to the Project Code <img src={gitHub} className="githubProjectImg" alt="Github Link"/></a></p>
    <img className="mainImg" src={project.mainPic} alt={project.altBlurb}/>
     <p className="netlifyClass"><a href={project.projectLink} target="_blank" rel="noreferrer">Link to the live project <img src={netlify} className="netlifyImg" alt="Netlify Link"/> </a></p> 
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
    @media(max-width: 600px){
        min-height: 10%;
    }
    
}

.mainImg{
    @media(max-width: 600px){
        display: none;
    }
}
h2{
    color: #cccccc

    
}


`
const ImageAndText = styled.div`
display: flex;
@media(max-width: 600px){
    flex-direction: column;
}


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
@media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        :first-child{
            margin-right: 3rem;
        }
    }
    @media(max-width: 400px){
        a:nth-child(2){
            margin-left: 3rem;
        }
    }
.netlifyImg{
    @media(max-width: 600px){
        top:11%;
        left: -5%
    }
}

img{
    width: 100px;
    height: 100px;
    position: absolute;
    top: -30%;
    left: 30%;
    @media(max-width: 600px){
        position: relative;
       
    }
    &:hover{
        opacity: 0.7;
    }
    
    
}
}

.githubProjectImg{
    @media(max-width: 600px){
        left: -10%;
        top: -10%;
    }
    @media(max-width: 400px){
        left: -10%;
        top: -10%;
    }
}

`

const Headline = styled.div`

`
