let ratio = 4

let CodeNode = { id: 'Code', label: 'Code', img: 'code.png', size: 20, display: 'Code'}
let MeNode = { id: 'me', label: 'me', img: 'me.jpg', size: 7 * ratio, display: 'Me'}
let MusicNode = { id: 'Music', label: 'Music', size: 10, img: 'music-note-2-xxl.png', display: "Tunes"}
let ProjectNode = { id: 'Projects', label: 'Projects', img: 'work.png', size: 4 * ratio, display: "Projects"}
let linkedIn = { id: 'linkedIn', label: 'linkedin', img: 'square-linkedin-512.png', size: 10, addy : "https://www.linkedin.com/in/iamjoncannon/", display: "Linked In"}
let github = { id: 'github', label: 'github', img: 'github_icon.png', size: 10, addy:"https://github.com/iamjoncannon", display: "Github"}
let resume = {id: 'resume', label: 'resume', img: 'resume.png', size: 8, addy:'/public/', DL: 'resume.pdf', display: "Hire Me"}
let fullstack = {id: 'fullstack', label: 'fullstack', img: 'fullstack.png', size: 10, addy: 'https://www.fullstackacademy.com/', display: "Fullstack Academy of Code"}
let UC = {id: 'UC', label: 'UC', img: 'uchicago.png', size: 15, addy: 'https://www.uchicago.edu/', display: "University of Chicago"}
let bodega = {id: 'bodega', label: 'bodega', img: 'bodega.png', size: 15, addy: 'https://globally.ltd/4', display: "Bodega"}
let soundcloud = {id: 'soundcloud', label: 'soundcloud', img: 'soundcloud-icon.png', size: 15, addy: 'https://soundcloud.com/bodegachill', display: "My SoundCloud"}
let bandCamp = {id: 'bandCamp', label: 'bandCamp', img: 'globallyLTD.jpg', size: 15, addy: 'https://gltd.bandcamp.com/album/ep-1', display: "Buy my Tunes"}


// projects 
let ThisNode = { id: 'this', color: 'black', text: 'this', size: 2 * ratio, display: "This Site"}
let genieNode = {id: 'genie', label: 'genie', img: 'lamp.png', size: 20, display: "Redux Genie NPM package"}
let conceptNode = { id: 'concept', label: 'concept', img: 'hegel.jpg', size: 4 * ratio, display: "Concept Graph Project"}

// redux genie
let genieText = { id: 'genietext', color: 'black', text: 'Redux Genie', size: 1 * ratio, addy: 'https://www.npmjs.com/package/redux-genie', display: "Redux CLI dev tool"}
let genieGH  = {id: 'genieGH', img: 'github_icon.png', size: 10, addy: 'https://github.com/lovely-libras/redux-genie', display: "Source"}
let genieSite = {id: 'genieSite', color: 'black', text: 'Docs', size: 1 * ratio, addy: 'http://redux-genie.net/docs', display: "Read the Docs"}
let genieNPM = {id: 'genieNPM', img: 'npm-logo.png', size: 4 * ratio, addy: 'https://www.npmjs.com/package/redux-genie', display: "npm i -g redux-genie"}




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



const genie = {
	nodes: [genieNode, genieText, genieSite, genieGH, genieNPM],
	links: [{source: 'genie', target: 'genietext'},
			{source: 'genie', target: 'genieSite'},
			{source: 'genie', target: 'genieGH'},
			{source: 'genieNPM', target: 'genie'}]

}

// concept
let conceptText = { id: 'conceptText', color: 'black', text: 'Concept Graph', size: 1 * ratio, display: "Hegel's Science of Logic as a graph"}
let conceptGH = {id: 'conceptGH', img: 'github_icon.png', size: 10, addy: 'https://github.com/iamjoncannon/concept_parser', display: 'Source'}
let conceptTech = { id: 'conceptTech', color: 'black', text: 'Tech', size: 1 * ratio, display: "Technologies Used"}
let conceptSite = { id: 'conceptSite', color: 'black', text: 'Deployed Site', size: 1 * ratio, display: "http://www.concept.joncannon.codes", addy: "http://www.concept.joncannon.codes"}

const concept = {
	nodes: [conceptText, conceptGH, conceptTech, conceptSite, conceptNode], 
	links: [{source: 'concept', target: 'conceptGH'},
			{source: 'concept', target: 'conceptTech'},
			{source: 'concept', target: 'conceptSite'},
			{source: 'concept', target: 'conceptText'}
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
	concept
}