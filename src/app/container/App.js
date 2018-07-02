import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import {User} from '../components/User';
import {Main} from '../components/Main';

import {setName,setAge} from '../actions/userAction';

import {connect} from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username:"MARMAR"
    }
  }
  
  onChangeHandle=(name)=>{
    this.setState({
        username: name.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
            <Main changeUsername={()=> this.props.setName(this.state.username)}/>
            <User username={this.props.user.name}/>
            <input type="text" onChange={(e)=>this.onChangeHandle(e)}/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      setName: (name) => {
        dispatch(
          setName(name)
        );
      }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
