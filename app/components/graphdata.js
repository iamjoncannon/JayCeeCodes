let ratio = 4

let music = { label: 'music', size: 10, img: 'music-note-2-xxl.png', id: 2}

const DeskOpening = {
  nodes: [ { id: 0, color: 'black', text: 'Code', size: 2 * ratio},
  		   // { id: 1, color: 'black', text: 'Jon Cannon', size: 3 * ratio},
 		   { id: 1, label: 'me', img: 'me.jpg', size: 7 * ratio},

  		   // { id: 2, color: 'black', text: 'Tunes', size: 1 * ratio},
  		   music,
  		   { id: 3, color: 'black', text: 'Projects', size: 1 * ratio},
 
  		 ],
  links: [{source: 1, target: 0}, 
  		  {source: 1, target: 2},
  		  {source: 0, target: 3},
  		  // {source: 4, target: 0},
  		  // {source: 5, target: 0}
  		   ]
}

const Code = {
	nodes:	[ 
				{ id: 0, color: 'black', text: 'Code', size: 4 * ratio},
				{ id: 2, color: 'black', text: 'Social', size: 2 * ratio},
				{ id: 3, color: 'black', text: 'Projects', size: 2 * ratio},
			],
	links:	[
				{source: 0, target: 2},
				{source: 0, target: 3}
			]
}

// const Code = {
// 	nodes: [ 
// 			{ id: 0, color: 'black', text: 'back', size: 2 * ratio},
// 			   // { id: 1, color: 'black', text: 'back', size: 1 * ratio},
// 			{ id: 4, color: 'black', text: 'Projects', size: 2 * ratio},
// 			{ id: 3, label: 'linkedin', img: 'square-linkedin-512.png', size: 15, addy : "https://www.linkedin.com/in/iamjoncannon/"},
// 			{ id: 5, label: 'github', img: 'github_icon.png', size: 15, addy:"https://github.com/iamjoncannon"},
// 			{ id: 6, color: 'black', text: 'Redux Genie', size: 3 * ratio},
// 			{ id: 7, color: 'black', text: 'Concept Graph', size: 3 * ratio},
// 			{ id: 8, label: 'github', img: 'resume.png', size: 15, addy:"https://github.com/iamjoncannon"},

// 			 ],
// 	links: [  {source: 4, target: 0}, 
// 			  {source: 3, target: 5}, 
// 			  {source: 4, target: 3},
// 			  // {source: 5, target: 0},
// 			  {source: 4, target: 6},
// 			  {source: 4, target: 7},
// 			  {source: 8, target: 3}
// 			   ]
// }

// const Project = {
// 	nodes: [
// 			{ id: 3, color: 'black', text: 'Projects', size: 2 * ratio}
// 		],

// 	links: [
// 			{source : 3 , target : 0}

// 		]
// }

ratio = 2

const mobileOpening = {
  nodes: [ { id: 0, color: 'black', text: 'Code', size: 3 * ratio},
 		   { id: 1, label: 'me', img: 'me.jpg', size: 5 * ratio},
  		   music
  		   // { id: 2, color: 'black', text: 'Music', size: 3 * ratio},
  		   // { id: 3, color: 'black', text: 'Projects', size: 1 * ratio}
  		 ],
  links: [{source: 1, target: 0}, 
  		  {source: 1, target: 2},
  		  // {source: 0, target: 3}
  		   ]
}



// { label: 'linkedin', img: 'square-linkedin-512.png', id: 0, addy="https://www.linkedin.com/in/iamjoncannon/"}
// { label: 'github', img: 'github_icon.png', id: 0, addy="https://github.com/iamjoncannon"}


export default {
	DeskOpening,
	mobileOpening,
	Code
}