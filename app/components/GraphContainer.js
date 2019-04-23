import React, { Suspense } from 'react'
import Graph from './Graph'

export default class GraphContainer extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      size: calculateScreen()
    }
  }

  resize = () => {
    this.setState({
      size: calculateScreen()
    })
  }

  componentDidMount(){
    window.addEventListener("resize", ()=> {this.resize()});
  }

  render() {

    return (
      <div >
        <div >
          <Graph screen={this.state.size}/>
        </div>
      </div>
    );
  }
}

function calculateScreen(){

  let {outerWidth, innerWidth, outerHeight, innerHeight } = window
  
  if(outerWidth !== innerWidth) return ['mobile', innerWidth, innerHeight ]

  return ['desktop', outerWidth, innerHeight ]

}