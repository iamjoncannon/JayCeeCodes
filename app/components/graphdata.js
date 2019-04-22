let ratio = 4

const DeskOpening = {
  nodes: [ { id: 0, color: 'black', text: 'Code', size: 2 * ratio},
  		   { id: 1, color: 'black', text: 'Jon Cannon', size: 3 * ratio},
  		   { id: 2, color: 'black', text: 'Music', size: 2 * ratio},
  		   { id: 3, color: 'black', text: 'Projects', size: 1 * ratio}
  		 ],
  links: [{source: 1, target: 0}, 
  		  {source: 1, target: 2},
  		  {source: 0, target: 3}
  		   ]
}

ratio = 2
// factor = 10
const mobileOpening = {
  nodes: [ { id: 0, color: 'black', text: 'Code', size: 3 * ratio},
  		   { id: 1, color: 'black', text: 'Jon Cannon', size: 4 * ratio},
  		   { id: 2, color: 'black', text: 'Music', size: 3 * ratio},
  		   // { id: 3, color: 'black', text: 'Projects', size: 1 * ratio}
  		 ],
  links: [{source: 1, target: 0}, 
  		  {source: 1, target: 2},
  		  // {source: 0, target: 3}
  		   ]
}

// { label: 'linkedin', img: '22340014.jpg', id: 0}

export default {
	DeskOpening,
	mobileOpening
}