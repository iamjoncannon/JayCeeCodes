import React from 'react';
import Graph from './Graph'

export default class GraphContainer extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render() {

    return (
      <div>
        <Graph screen={calculateScreen()}/>
      </div>
    );
  }
}

function calculateScreen(){

  let {outerWidth, innerWidth, outerHeight, innerHeight } = window
  
  if(outerWidth !== innerWidth) return ['mobile', innerWidth, innerHeight ]

  return ['desktop', outerWidth, innerHeight ]

}