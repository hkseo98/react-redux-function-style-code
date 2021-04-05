import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import NavContainer from './containers/Nav'
import ReadContainer from './containers/Read'
import ControlContainer from './containers/Control'
import CreateContainer from './containers/Create'
import { connect } from 'react-redux';
import UpdateContainer from './containers/Update'

function App(props) {
  let article = null;
  if (props.mode === "CREATE") {
    article = <CreateContainer></CreateContainer>
  } else if (props.mode === "UPDATE") {
    article = <UpdateContainer></UpdateContainer>
  } else {
    article = <ReadContainer></ReadContainer>
  } 
  return(
    <div className="App">
      <Header></Header>
      <NavContainer></NavContainer>
      <ControlContainer></ControlContainer>
      {article}
    </div>
  )
}

export default connect(function(state){  // App에서도 리덕스의 state 값을 사용하기 위해
  return {
    mode:state.mode
  }
})(App);