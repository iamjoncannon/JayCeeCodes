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
      graphData : graphData,
      scene: 'opening',
      focus: {  x: -11.712163369028769, y: -23.893619849278366, z: 12.44009596667416 },
      click: {text: 'opening'}
    }
  }

  componentDidMount(){
    let type = this.props.screen[0]
    let factor = type === 'mobile' ? 10 : 20 ;
    type === 'desktop' && this.props.screen[1] < 1000 ? factor = 5 : '' ;
    // factor = 10
    this.fg.cameraPosition(
      { z:  window.innerWidth / factor  }, // new position
      null,
      1000  // ms transition duration
    );
  }

  _handleClick = (node) => {

    if(node.text){

      this.setState({
        scene : node.text
      })
    }

  }

  _handleHover = (node) => {
    if(this.props.screen[0] === 'desktop'){

      node !== null ? this.setState({highlighted : node.id }) : this.setState({highlighted : null })
    }
    else{
      // hover equals click on mobile
      node !== null ? this.setState({highlighted : node.id }) : this.setState({highlighted : null })
      
    }
  }

  render(){
    let {screen } = this.props
    let screenType = screen[0]
    let width = screen[1]
    let height = screen[2]
    let {graphData} = this.state
    return (

      <div>
        <div> {this.props.screen[0]} </div>
        <ForceGraph3D
          height={height}
          width={width}
          ref={el => { this.fg = el; }}
          // backgroundColor={'#ffffff'}
            graphData={screenType === 'desktop' ? graphData.DeskOpening : graphData.mobileOpening}
          // linkColor={() => 'rgba( 0, 0, 0, 1)'}
            linkWidth={2}
            nodeThreeObject={( node ) => {

              if(node.img){
              const imgTexture = new THREE.TextureLoader().load(`./imgs/${node.img}`);
              const material = new THREE.SpriteMaterial({ map: imgTexture });
              const sprite = new THREE.Sprite(material);
              sprite.scale.set(12, 12);
              return sprite;  
              }
              if(node.text){

              const sprite = new SpriteText(node.text);
                  sprite.color =  node.id === this.state.highlighted ? 'red' : 'white';
                  sprite.textHeight = node.id === this.state.highlighted ? node.size + 4 : node.size ;
                  return sprite;
              }
            }}
          onNodeClick={this._handleClick}
          enableNodeDrag={false}
          enableNavigationControls={false}
          showNavInfo={false}
          onNodeHover={this._handleHover}
          numDimensions={2}
        /> 
      </div>
    )
  }
}


