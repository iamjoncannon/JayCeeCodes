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
      history: [],
      scene: 'back',
      highlighted: null,
      display: 'joncannon.codes'
    }
  }

  componentDidMount(){

    let type = this.props.screen[0]
    let factor = type === 'mobile' ? 8 : 16  ;
    type === 'desktop' && this.props.screen[1] < 1000 ? factor = 6 : '' ;
    // factor = 10
    
    this.fg.cameraPosition(
      { z:  window.innerWidth / factor  }, // new position
      null,
      1000  // ms transition duration
    );

    let newZoom = window.innerWidth / factor

    this.setState({
      factor: factor
    })
  }

  _handleClick = (node) => {

    if(node.DL){

        let link = document.createElement("a");
        link.download = node.DL;
        link.href = node.DL;
        link.preventDefault = true
        console.log(link)
        document.body.appendChild(link);
        link.click().preventDefault();
        document.body.removeChild(link);
        // delete link;


    }

    if(node.addy){
      // window.location = node.addy
      window.open(node.addy, '_blank')

      return
    }

    else if(node.text && node.text !== 'Jon Cannon'){

      this.setState({
        history : [...this.state.history, this.state.scene],
        scene : node.text
      })
    }
    else if(node.label){

      this.setState({
        history : [...this.state.history, this.state.scene],
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

    if(!node && !this.state.highlighted){

      this.setState({highlighted : null, display: 'joncannon.codes'})
    }
    else if(!node && this.state.highlighted){
    // null and something is highlighted
      this.setState({highlighted : null, display: 'joncannon.codes'})
    }
    else if(node && node.id !== this.state.highlighted){

      if(this.props.screen[0] === 'desktop'){

        this.setState({highlighted : node.id, display: node.display })
      }
      else if(this.props.screen[0] === 'mobile'){
        // hover equals click on mobile
        
        this.setState({highlighted : node.id }) 

      }
    }
  }

  _handleBack = () => {
    let { history, scene } = this.state

    let newHistory = history.slice(0, -1)
    let last = history[history.length -1]

    this.setState({
      history: newHistory,
      scene: last
    })
  }

  render(){
    console.log(this.state.history, this.state.scene)
    let {screen } = this.props
    let screenType = screen[0]
    let {graphData} = this.state
    let { scene } = this.state 
    let viewData = graphData[`${scene}`]
    scene === 'back'  && screenType === 'desktop' ? viewData = graphData.DeskOpening : 
    scene === 'back'  && screenType === 'mobile' ? viewData = graphData.mobileOpening : '' ;
    !viewData ? viewData = graphData.me : '' ;

    return (

      <div>
        <div className={'backContainer'}>
          <img className={ scene !== 'back' ? "back" : "back hide" } src='/imgs/back.png' onClick={ this._handleBack } />
        </div>

        {/* <span style={{position: 'fixed', left: '100px', top: '20vh', zIndex: 2, color: 'red', font: 'Sans Serif', fontSize: '40px'}}> { this.state.display } </span> */} 
        
        <span className={"display"}> {this.state.display} </span>

        <div style={{ zIndex: 1 }}>
        <ForceGraph3D
          height={screen[2]}
          width={screen[1]}
          ref={el => { this.fg = el; }}
          // backgroundColor={'#ffffff'}
            graphData={ viewData }
          // linkColor={() => 'rgba( 0, 0, 0, 1)'}
            linkWidth={2}
            linkMaterial={'RawShaderMaterial'}
            nodeThreeObject={( node ) => {

              if(node.img){
                let size = node.size
                node.id === this.state.highlighted ? size += 8 : '' ;
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


