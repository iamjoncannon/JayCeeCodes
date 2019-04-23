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

  resize(){

    let type = this.props.screen[0]
    let screensize = this.props.screen[1]
    let factor

    screensize > 1500 ? factor = 18 :
    screensize > 1200 ? factor = 15 : 
    screensize > 1000 ? factor = 10 :
    screensize > 925 ? factor = 8 : 
    screensize > 780 ? factor = 7 : 
    screensize < 780 ? factor = 6 : 
    screensize < 500 ? factor = 2 : '' ;

    type === 'mobile' ? factor = 3 : '' ; 
     
    this.fg.cameraPosition(
      { z:  window.innerWidth / factor  }, // new position
      null,
      1000  // ms transition duration
    );

    let newZoom = window.innerWidth / factor

    if(factor !== this.state.factor){

      this.setState({
        factor: factor
      })
    }

  }

  componentDidMount(){
    
    this.resize()
  }

  componentWillUpdate(){
    
    this.resize()
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

    }

    if(node.addy){

      window.open(node.addy, '_blank')

      return
    }
    else if(node.label && node.label !== this.state.scene){

      this.setState({
        history : [...this.state.history, this.state.scene],
        scene : node.label
      })
      return
    }

    else if(node.text && node.label !== this.state.scene){

      this.setState({
        history : [...this.state.history, this.state.scene],
        scene : node.text
      })
    }
  }

  _handleHover = (node) => {

    if(!node && !this.state.highlighted){

      let nextState = this.state.scene === 'back' ? {highlighted : null, display: 'joncannon.codes'} : {highlighted : null, display: null}

      this.setState(nextState)
    }
    else if(!node && this.state.highlighted){
    // null and something is highlighted
      let nextState = this.state.scene === 'back' ? {highlighted : null, display: 'joncannon.codes'} : {highlighted : null, display: null}

      this.setState(nextState)
    }
    else if(node && node.id !== this.state.highlighted){

      if(this.props.screen[0] === 'desktop'){

        this.setState({highlighted : node.id, display: node.display })
      }
      else if(node && this.props.screen[0] === 'mobile'){
        // hover equals click on mobile
        
        this.setState({mobileDisplay : node.display })
        this._handleClick(node) 

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
        <img className={ scene !== 'back' && screenType === 'desktop' ? "back" : "back hide" } src='/imgs/back.png' onClick={ this._handleBack } />
        <span className={"display"}> {screenType === 'mobile' ? "joncannon.codes" : this.state.display } </span>
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


