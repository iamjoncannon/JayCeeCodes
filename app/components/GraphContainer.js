import React, { Suspense } from 'react'
import './spinnaz.css'
import Spinner from './refresh-button.svg'
import SVG from 'react-inlinesvg';

const Graph = calculateScreen()[0] === 'desktop' ? React.lazy( () => import('./Graph')) : React.lazy ( () => import('./mobileGraph') ) ; 

const HistoryButton = ({el, id, clicked, hov, classname }) => {

  calculateScreen()[1] < 1200 ? classname = 'navbuttons small' : '' ;

  return (
    <span className={classname} 
          onClick={(node)=> clicked(el)} 
          style={{padding: '3px'}}
          onMouseOver={()=>hov(el)}> 

      { id > 0 ? ' < ' + el : el } 
    
    </span>
  )
}

export default class GraphContainer extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      size: calculateScreen(),
      history: ['joncannon.codes', '...LOADING '],
      loading: true,
      scene: 'back'
    }
  }

  resize = () => {

    this.setState({
      size: calculateScreen()
    })
  }

  loaded = () => {
    this.state.loading ? this.setState({history: ['joncannon.codes'], loading: false}) : '' ;
  }

  componentDidMount(){
    this.resize()
    window.addEventListener("resize", ()=> {this.resize()});
  }

  setHistory = (node) => {

      let update = node.display

      if(this.state.history.includes(update)) return

      this.setState({
        history: [...this.state.history, update],
        scene: update
      })

  }

  _handleHistory = (clicked) => {

    if(clicked === 'joncannon.codes'){
      this.setState({
        history: ['joncannon.codes'],
        scene: 'back'
      })

      return
    }

    let { history, scene } = this.state

    let newHistory = history.slice(0, history.indexOf(clicked))
    let selected = history[history.length -1]

    this.setState({
      history: [...newHistory, clicked],
      scene: clicked
    })

  }

  lighted = (value) => {
    this.setState({lighted : value})
  }

  render() {

    return (
      <div >
        <div className={'navbar'}> 
          <div className={ this.state.size[0] === 'mobile' ? 'hide' : ''}> 
            {! this.state.lighted ? this.state.history.map((el, i )=>{return <HistoryButton clicked={(button)=> this._handleHistory(button)} 
                                                                                            // style={{fontSize: '300px'}}
                                                                                            id={i} 
                                                                                            key={i} 
                                                                                            el={el}
                                                                                            classname={this.state.history.length > 3 ? "navbuttons small" : "navbuttons big" }

                                                                            /> 
                                              }
                                    ) : '' 
            }
          </div>
        </div>
        <div >     

          <Suspense fallback={ null }>

            <Graph setHistory={(node)=>this.setHistory(node)} 
                  history={this.state.history} 
                  screen={this.state.size} 
                  loading={this.state.loading}
                  scene={this.state.scene}
                  loaded={this.loaded}
                  lighted={this.lighted}
            /> 
          
          </Suspense>
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