import ReactDOM from 'react-dom'
import React from 'react'
import { render } from 'react-dom'
import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext'
import  graphData  from './graphdata'

export default class Graph extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentZoom: 0,
      graphData : graphData,
      scene: 'back',
      focus: {  x: -11.712163369028769, y: -23.893619849278366, z: 12.44009596667416 },
      click: {text: 'back'}
    }
  }

  componentDidMount(){

    let type = this.props.screen[0]
    let factor = type === 'mobile' ? 10 : 19 ;
    type === 'desktop' && this.props.screen[1] < 1000 ? factor = 6 : '' ;
    // factor = 10
    
    this.fg.cameraPosition(
      { z:  window.innerWidth / factor  }, // new position
      null,
      1000  // ms transition duration
    );

    let newZoom = window.innerWidth / factor
    this.setState({
      currentZoom: newZoom
    })
  }

  _handleClick = (node) => {

    if(node.addy){
      window.location = node.addy

      return
    }

    else if(node.text && node.text !== 'Jon Cannon'){

      this.setState({
        scene : node.text
      })
    }
    else if(node.label){

      this.setState({
        scene : node.label
      })
    }

    // if(node.text === 'Code') this.zoom(200)
    // if(node.text === 'back') this.zoom(this.state.factor)

  }

  zoom = (zoomOut) => {

    this.fg.cameraPosition(
      { z:  zoomOut  }, // new position
      null,
      30  // ms transition duration
    );

    this.setState({
      currentZoom: zoomOut
    })
  }

   setCamera = (node) => {

    const {x, y , z} = node

    this.fg.cameraPosition(
      { x : x, y : y, z : z  }, // new position
      null,
      10  // ms transition duration
    );

  }

  _handleHover = (node) => {
    console.log('hitting cb')

    if(!node && !this.state.highlighted){

      console.log('FIRST !node and !this.state.highlighted')
      this.setState({highlighted : null})
    }
    else if(!node && this.state.highlighted){
    // null and something is highlighted
      console.log('SECOND !node and this state highlighted')
      this.setState({highlighted : null})
    }
    else if(node && node.id !== this.state.highlighted){

      if(this.props.screen[0] === 'desktop'){

        this.setState({highlighted : node.id })
      }
      else if(this.props.screen[0] === 'mobile'){
        // hover equals click on mobile
        
        this.setState({highlighted : node.id }) 

      }
    }
  }

  render(){

    let {screen } = this.props
    let screenType = screen[0]
    let width = screen[1]
    let height = screen[2]
    let {graphData} = this.state
    let { scene } = this.state 
    let data = (scene === 'back' || scene === 'back') && screenType === 'desktop' ? graphData.DeskOpening : graphData.mobileOpening ;
    scene === 'Code' ? data = graphData.Code : '' ;
    // scene === 'Projects' ? data = graphData.Project '' ;


    return (

        // <span style={{position: 'fixed', left: '100px', zIndex: 2, color: 'white', font: 'Sans Serif', fontSize: '50px'}}> Back </span> 
      <div>
      
      
        <span className={"up button"} onClick={()=>this.zoom(this.state.currentZoom + 10)}> UP </span>
        <span className={"display button"} style={{left : "200 px"}}> {this.state.currentZoom} </span>
        <div style={{ zIndex: 1 }}>
        <ForceGraph3D
          height={height}
          width={width}
          ref={el => { this.fg = el; }}
          // backgroundColor={'#ffffff'}
            graphData={ data }
          // linkColor={() => 'rgba( 0, 0, 0, 1)'}
            linkWidth={2}
            linkMaterial={'RawShaderMaterial'}
            nodeThreeObject={( node ) => {

              if(node.img){
                let size = node.size
                node.id === this.state.highlighted ? size += 6 : '' ;
                const imgTexture = new THREE.TextureLoader().load(`./imgs/${node.img}`);
                const material = new THREE.SpriteMaterial({ map: imgTexture });
                const sprite = new THREE.Sprite(material);
                sprite.scale.set(size, size);
                return sprite;  
              }
              if(node.text){

                const sprite = new SpriteText(node.text);
                sprite.fontFace = 'Sans Serif'
                sprite.color =  node.id === this.state.highlighted ? 'red' : 'white';
                sprite.textHeight = node.id === this.state.highlighted ? node.size + 4 : node.size ;
                return sprite;
              }
            }}
          onNodeClick={this._handleClick}
          enableNodeDrag={false}
          enableNavigationControls={false}
          showNavInfo={false}
          onNodeHover={this._handleHover }
          numDimensions={2}
        /> 
      </div>
      </div>
    )
  }
}


