import quizzicle from './images/quizzicle.png'
import quizzicle2 from './images/quizzicle2.png'
import todoPic from './images/todo-react.png'
import musicApp from './images/music-app.png'
import musicApp2 from './images/music-app2.png'
import todoPic2 from './images/todo2.png'
import portfolio from './images/portfolioPic.png'

//Exporting just the object so no need for default
export const ProjectState = () => {
    return [
        {
            title: "Quiz App Made in React",
            mainPic: quizzicle,
            altBlurb: "Quiz app",
            secondImg: quizzicle2,
            url: '/projects/quizzicle',
            gitHub: 'https://github.com/jamieTardi/react-quiz',
            projectLink: 'https://goofy-easley-5eee21.netlify.app',
            projectInfo: "This quiz application is made using React.js and uses an open-source RESTful API to gather the data that is provided for the quiz. It has a simple elegant look and has a mobile friendly design."
        },
        {
            title: "Music Player made in React",
            mainPic: musicApp,
            altBlurb: "Music app",
            secondImg: musicApp2,
            gitHub: 'https://github.com/jamieTardi/music-player',
            projectLink: 'https://upbeat-stonebraker-3a350a.netlify.app',
            url: '/projects/music-player',
            projectInfo: "This music player that is created using React.js show cases some of the powerful uses of state management and manipulation to create a working music player and song library."
        },
        {
            title: "Todo list made in React",
            mainPic: todoPic,
            altBlurb: "Todo app",
            secondImg: todoPic2,
            gitHub: 'https://github.com/jamieTardi/react-todo',
            projectLink: 'https://heuristic-benz-d8f6ae.netlify.app',
            url: '/projects/todo',
            projectInfo: "This to-do created in react.js was my first react project to demonstrate the use of state and to have a user friendly UI."
        },
        {
            title: "Portfolio made in react",
            mainPic: portfolio,
            altBlurb: "Portfolio",
            secondImg: portfolio,
            gitHub: 'https://github.com/jamieTardi/react-portfolio',
            projectLink: 'https://stupefied-bose-b813d7.netlify.app',
            url: '/projects/portfolio',
            projectInfo: "My Profesional portfolio made in react JavaScript to show case some of the features of react."
        }
    ]
}

