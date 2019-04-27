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

    return (
      <div id={'mobileContainer'}>
        <span className={'navbuttons mobileText'}> joncannon.codes </span>

        <div id={'iconContainer'}>
          <img className={'icons'} src='imgs/square-linkedin-512.png' />
          <img className={'icons'} src='imgs/github_icon.png' />
          <img className={'icons'} src='imgs/resume.png' />
        </div>

        <img className={'images'} src='imgs/work.png' />
        <img className={'images'} src='imgs/music-note-2-xxl.png' />
      
      </div>
    );
  }
}