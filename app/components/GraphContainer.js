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

    console.log(calculateScreen())
    this.setState({
      size: calculateScreen()
    })
  }

  componentDidMount(){
    window.addEventListener("resize", ()=> {this.resize()});
  }

  componentWillUnmount() {
    // window.removeEventListener("resize");
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

  let { outerWidth, innerWidth, outerHeight, innerHeight } = window
  
  if(outerWidth < 700 ) return ['mobile', outerWidth, innerHeight ]

  return ['desktop', outerWidth, innerHeight ]

}