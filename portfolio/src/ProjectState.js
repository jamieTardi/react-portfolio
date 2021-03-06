import quizzicle from './images/quizzicle.png';
import quizzicle2 from './images/quizzicle2.png';
import todoPic from './images/todo-react.png';
import musicApp from './images/music-app.png';
import musicApp2 from './images/music-app2.png';
import todoPic2 from './images/todo2.png';
import portfolio from './images/portfolioPic.png';
import colorApp from './images/ColorApp.png';
import blulago from './images/blulagoPic.png';
import coronavirusApp2 from './images/coronavirus-app2.png';

import gentoo2 from './images/gentoo2.png';

//Exporting just the object so no need for default
export const ProjectState = () => {
	return [
		{
			title: 'A Covid-19 tracking app that logs stats using charts',
			mainPic: coronavirusApp2,
			altBlurb: 'Covid-19',
			secondImg: '',
			gitHub: 'https://github.com/jamieTardi/corona-map',
			projectLink: 'https://coronavirus-graph-app.netlify.app/',
			url: '/projects/coronavirus',
			projectInfo:
				'This app tracks data from the covid-19 pandemic using the chartJS library and Axios. Built in react.js.',
		},
		{
			title: 'A large e-commerce site built in React for Gentoo ltd',
			mainPic: gentoo2,
			altBlurb: 'Gentoo Site',
			secondImg: '',
			gitHub: 'https://github.com/jamieTardi/gentoo-site',
			projectLink: 'https://www.gentoo-air.co.uk',
			url: '/projects/gentoo-air',
			projectInfo:
				'This site is a fully working e-commerce site using stripe for payment authentication. Built in react JS, some parts are still under construction.',
		},
		{
			title: 'A fully working E commerce Site built for a customer',
			mainPic: blulago,
			altBlurb: 'Blulago',
			secondImg: '',
			gitHub: 'https://github.com/jamieTardi/blulago-react',
			projectLink: 'https://www.blulagofishing.co.uk/',
			url: '/projects/blulago',
			projectInfo:
				'This is a fully working E commerce Site built for a client, it is simple yet elegant. The customer is very happy and has commisioned two more sites.',
		},
		{
			title: 'Quiz App Made in React',
			mainPic: quizzicle,
			altBlurb: 'Quiz app',
			secondImg: quizzicle2,
			url: '/projects/quizzicle',
			gitHub: 'https://github.com/jamieTardi/react-quiz',
			projectLink: 'https://goofy-easley-5eee21.netlify.app',
			projectInfo:
				'This quiz application is made using React.js and uses an open-source RESTful API to gather the data that is provided for the quiz. It has a simple elegant look and has a mobile friendly design.',
		},
		{
			title: 'Music Player made in React',
			mainPic: musicApp,
			altBlurb: 'Music app',
			secondImg: musicApp2,
			gitHub: 'https://github.com/jamieTardi/music-player',
			projectLink: 'https://upbeat-stonebraker-3a350a.netlify.app',
			url: '/projects/music-player',
			projectInfo:
				'This music player that is created using React.js show cases some of the powerful uses of state management and manipulation to create a working music player and song library.',
		},
		{
			title: 'Todo list made in React',
			mainPic: todoPic,
			altBlurb: 'Todo app',
			secondImg: todoPic2,
			gitHub: 'https://github.com/jamieTardi/react-todo',
			projectLink: 'https://heuristic-benz-d8f6ae.netlify.app',
			url: '/projects/todo',
			projectInfo:
				'This to-do created in react.js was my first react project to demonstrate the use of state and to have a user friendly UI.',
		},
		{
			title: 'Portfolio made in react',
			mainPic: portfolio,
			altBlurb: 'Portfolio',
			secondImg: portfolio,
			gitHub: 'https://github.com/jamieTardi/react-portfolio',
			projectLink: 'https://stupefied-bose-b813d7.netlify.app',
			url: '/projects/portfolio',
			projectInfo:
				'My Profesional portfolio made in react JavaScript to show case some of the features of react.',
		},
		{
			title: 'A colour picking App made in standard JavaScript',
			mainPic: colorApp,
			altBlurb: 'Color app',
			secondImg: '',
			gitHub: 'https://github.com/jamieTardi/color-app',
			projectLink: 'https://suspicious-pasteur-da738f.netlify.app/',
			url: '/projects/colour-app',
			projectInfo:
				'This colour picking app helps choose a colour for designing web pages, it has a feature to save colours and copy to clipboard.',
		},
	];
};
