import React, { Suspense } from 'react'
import './spinnaz.css'
import Spinner from './refresh-button.svg'
import SVG from 'react-inlinesvg';


const DesktopGraph = React.lazy( () => import('./Graph'))


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

  componentWillUnmount() {
    // window.removeEventListener("resize");
  }

  render() {

    return (
      <div >
        <div >
          <Suspense fallback={<Spinner className='loader'/>}>
              {this.state.size[1] > 700 ? <DesktopGraph screen={this.state.size}/> : <div> 'nothing loaded: ' + {this.state.size.join(' ')} </div>}
          </Suspense>
        </div>
      </div>
    );
  }
}
              // <DesktopGraph />
          // <Graph screen={this.state.size}/>

function calculateScreen(){

  let { outerWidth, innerWidth, outerHeight, innerHeight } = window
  
  if(outerWidth < 700 ) return ['mobile', outerWidth, innerHeight ]

  return ['desktop', outerWidth, innerHeight ]

}