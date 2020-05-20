import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {this.props.loading===true? <div className="center">
				<p>Wait for Data patiently, it won't take long!</p>
				<img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif"/>
				</div>:
          <Dashboard/>
        }
        
      </div>
    )
  }
}
function mapStateToProps({authedUser}){
  return{
    loading: authedUser===null
  }
}

export default connect(mapStateToProps) (App)