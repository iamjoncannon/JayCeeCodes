import React from 'react';
import './mobile.css'

export default class mobileGraph extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      scene: 'home'
    }
  }

  componentDidMount(){

  }

  render() {

    const { scene } = this.state

    return (
      <div id={'mobileContainer'}>

          <span className={'navbuttons mobileText'} onClick={()=> this.setState({scene: 'home'})}> joncannon.codes </span>


          {scene === 'home' ? 

          <div id={'home'}>
            <div id={'iconContainer'}>
              <a href={'https://www.linkedin.com/in/iamjoncannon/'}>
                <img className={'icons'} src='public/imgs/square-linkedin-512.png' />
              </a>
              <a href={'https://github.com/iamjoncannon'}>
                <img className={'icons'} src='public/imgs/github_icon.png' />
              </a>
              <a href={'public/JonathanCannon.pdf'} download>
                <img className={'icons'} src='public/imgs/resume.png' />
              </a>
            
            </div>

            <div className={'lower'}>
              
              <img className={'images'} src='public/imgs/work.png' onClick={()=> this.setState({scene: 'work'})} />
              
              <a href={'https://gltd.bandcamp.com/album/ep-1'}>
                <img className={'images'} src='public/imgs/music-note-2-xxl.png' />
              </a>
            
            </div>

          </div>

          : scene === 'work' ? 

          <div id={'work'}>
              <a href={'http://redux-genie.net'} >
                <img className={'images'} src='public/imgs/lamp.png'/>
              </a>

              <a href={'http://concept.joncannon.codes'}>
                <img className={'images'} src='public/imgs/hegel.jpg'/>
              </a>
          </div>
          : ''

        }

      </div>
    );
  }
}