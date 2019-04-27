// will migrate this to Mongo

let ratio = 4

let CodeNode = { id: 'Code', label: 'Code', img: 'code.png', size: 20, display: 'Code'}
let MeNode = { id: 'me', label: 'me', img: 'me.jpg', size: 7 * ratio, display: 'Me'}
let MusicNode = { id: 'Music', label: 'Music', size: 10, img: 'music-note-2-xxl.png', display: "Tunes"}
let ProjectNode = { id: 'Projects', label: 'Projects', img: 'work.png', size: 4 * ratio, display: "Projects"}
let linkedIn = { id: 'linkedIn', label: 'linkedin', img: 'square-linkedin-512.png', size: 10, addy : "https://www.linkedin.com/in/iamjoncannon/", display: "Linked In"}
let github = { id: 'github', label: 'github', img: 'github_icon.png', size: 10, addy:"https://github.com/iamjoncannon", display: "Github"}
let resume = {id: 'resume', label: 'resume', img: 'resume.png', size: 8, addy:'/public/', DL: '/public/JonathanCannon.pdf', display: "Hire Me"}
let fullstack = {id: 'fullstack', label: 'fullstack', img: 'fullstack.png', size: 10, addy: 'https://www.fullstackacademy.com/', display: "Fullstack Academy of Code"}
let UC = {id: 'UC', label: 'UC', img: 'uchicago.png', size: 15, addy: 'https://www.uchicago.edu/', display: "University of Chicago"}
let bodega = {id: 'bodega', label: 'bodega', img: 'bodega.png', size: 15, addy: 'https://globally.ltd/4', display: "Bodega"}
let soundcloud = {id: 'soundcloud', label: 'soundcloud', img: 'soundcloud-icon.png', size: 15, addy: 'https://soundcloud.com/bodegachill', display: "My SoundCloud"}
let bandCamp = {id: 'bandCamp', label: 'bandCamp', img: 'globallyLTD.jpg', size: 15, addy: 'https://gltd.bandcamp.com/album/ep-1', display: "Buy my Tunes"}



// projects 
let ThisNode = { id: 'this', color: 'black', label: 'thisSite', text: 'this', size: 2 * ratio, display: "This Site"}
let genieNode = {id: 'genie', label: 'genie', img: 'lamp.png', size: 20, display: "Redux Genie"}
let conceptNode = { id: 'concept', label: 'concept', img: 'hegel.jpg', size: 4 * ratio, display: "Concept Graph Project"}




const DeskOpening = {
  nodes: [ CodeNode, MeNode, MusicNode, ProjectNode ],
  links: [{source: 'Code', target: 'me'}, 
  		  {source: 'Music', target: 'me'},
  		  {source: 'Projects', target: 'Code'},
  		   ]
}

const Code = {
	nodes:	[ CodeNode, ProjectNode, github, linkedIn ],			
	links:	[
				{source: 'Code', target: 'Projects'},
				{source: 'Code', target: 'github'},
				{source: 'github', target: 'linkedIn'},

			]
}

const me = {
	nodes : [ {...MeNode, size: 5 * ratio}, resume, fullstack, ProjectNode, UC ],
	links: [
			{source : 'me', target: 'resume'},			
			{source : 'fullstack', target: 'me'},
			{source: 'Projects', target: 'me'},
			{source: 'UC', target: 'me'}
			]
}

const Music = {
	nodes: [ MusicNode, bodega, soundcloud, bandCamp],
	links: [
			{source: 'Music', target: 'bodega'},
			{source: 'soundcloud', target: 'bodega'},
			{source: 'bodega', target: 'bandCamp'}
		]
}

const Projects = {
	nodes: [ ProjectNode, genieNode, conceptNode, ThisNode ],
	links: [{source: 'Projects', target: 'genie'}, 
			{source: 'Projects', target: 'concept'},
			{source: 'this', target: 'Projects'}]
}

// redux genie
let genieText = { id: 'genietext', color: 'black', text: 'Redux Genie', size: 1.3 * ratio, addy: 'https://www.npmjs.com/package/redux-genie', display: "Redux CLI dev tool"}
let genieGH  = {id: 'genieGH', img: 'github_icon.png', size: 10, addy: 'https://github.com/lovely-libras/redux-genie', display: "Source"}
let genieSite = {id: 'genieSite', color: 'black', text: 'Docs', size: 1.3 * ratio, addy: 'http://redux-genie.net/docs', display: "Read the Docs"}
let genieNPM = {id: 'genieNPM', img: 'npm-logo.png', size: 4 * ratio, addy: 'https://www.npmjs.com/package/redux-genie', display: "npm i -g redux-genie"}
let genieTech = {id: 'GenieTech', color: 'black', label: "GenieTech", text: "Technologies", size: 1.3 * ratio, display: "Redux Genie Technologies"}


const genie = {
	nodes: [genieNode, genieText, genieSite, genieGH, genieNPM, genieTech],
	links: [{source: 'genie', target: 'genietext'},
			{source: 'genie', target: 'genieSite'},
			{source: 'genie', target: 'genieGH'},
			{source: 'genieNPM', target: 'genie'},
			{source: 'GenieTech', target: 'genie'}]

}

// NPM, NodeJS, Bash, Redux, Mocha/Chai

let NodeJS = {id: 'nodeJS', img: 'node.jpg', size: 4 * ratio, display: "NodeJS"}
let Bash = {id: 'Bash', img: 'bash.svg', size: 4 * ratio, display: "Bash scripting"}
let Redux = {id: 'Redux', img: 'redux.png', size: 4 * ratio, display: "Redux"}
let Mocha = {id: 'Mocha', img: 'mocha.svg', size: 4 * ratio, display: "Mocha/Chai TDD" }
// let Chai = {id: 'Mocha', img: 'mocha.svg', size: 4 * ratio }

const GenieTech = {
	nodes: [genieNode, genieNPM, NodeJS, Bash, Redux, Mocha],
	links: [{source: 'genie', target: 'nodeJS'},
			{source: 'genie', target: 'Bash'},
			{source: 'genie', target: 'Redux'},
			{source: 'genieNPM', target: 'genie'},
			{source: 'Mocha', target: 'genie'}]
}

// concept
let conceptText = { id: 'conceptText', color: 'black', label: "concept", text: 'Concept Graph', size: 1 * ratio, display: "Hegel's Science of Logic as a graph", addy: "http://concept.joncannon.codes"}
let conceptGH = {id: 'conceptGH', img: 'github_icon.png', size: 10, addy: 'https://github.com/iamjoncannon/concept_parser', display: 'Source'}
let conceptTech = { id: 'conceptTech', color: 'black', label: "ConceptTech", text: 'Technologies', size: 1 * ratio, display: "Concept Graph Technologies"}
let conceptSite = { id: 'conceptSite', color: 'black', text: 'Deployed Site', size: 1 * ratio, display: "http://concept.joncannon.codes", addy: "http://concept.joncannon.codes"}
let presentation = { id: 'present', color: 'black', img: 'presentation.png', size: 5 * ratio, display: "Presentation", addy: "https://www.youtube.com/watch?v=sPflAhvZgrU&feature=youtu.be"}

const concept = {
	nodes: [conceptText, conceptGH, conceptTech, conceptSite, conceptNode, presentation], 
	links: [{source: 'concept', target: 'conceptGH'},
			{source: 'concept', target: 'conceptTech'},
			{source: 'concept', target: 'conceptSite'},
			{source: 'concept', target: 'conceptText'},
			{source: 'concept', target: 'present'}
			]
}

// NodeJS, Express, PostGres, Amazon, D3, pm2

let express = {id: 'express', img: 'express.png', size: 4 * ratio, display: "Express JS" }
let postgres = {id: 'postgres', img: 'postgres.png', size: 4 * ratio, display: "PostgreSQL" }
let amazon = {id: 'amazon', img: 'aws.png', size: 4 * ratio, display: "AWS EC2" }
let D3 = {id: 'D3', img: 'D3.png', size: 4 * ratio, display: "D3" }
let pm2 = {id: 'pm2', img: 'pm2-logo.png', size: 4 * ratio, display: "pm2" }
let react = {id: 'react', img: 'react.png', size: 5 * ratio, display: "React" }

const ConceptTech = {
	nodes: [conceptNode, NodeJS, express, postgres, amazon, D3, pm2, react],
	links: [{source: 'concept', target: 'nodeJS'},
			{source: 'concept', target: 'express'},
			{source: 'concept', target: 'postgres'},
			{source: 'concept', target: 'amazon'},
			{source: 'concept', target: 'D3'},
			{source: 'concept', target: 'pm2'},
			{source: 'concept', target: 'react'}
		]
}

const thisSite = {
	nodes: [ThisNode, NodeJS, express, amazon, D3, pm2, react],
	links: [{source: 'this', target: 'nodeJS'},
			{source: 'this', target: 'express'},
			{source: 'this', target: 'amazon'},
			{source: 'this', target: 'D3'},
			{source: 'this', target: 'pm2'},
			{source: 'this', target: 'react'}
		]
}

const mobileOpening = {
  nodes: [ CodeNode, 
 		   MeNode, 
  		   MusicNode,
  		 ],
  links: [{source: 'me', target: 'Code'}, 
  		  {source: 'me', target: 'Music'},

  		   ]
}

export default {
	DeskOpening,
	mobileOpening,
	Code,
	me,
	Music,
	Projects,
	genie,
	concept,
	GenieTech,
	ConceptTech, 
	thisSite
}
