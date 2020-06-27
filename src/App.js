import React, { Component } from 'react';
import './App.css';

import Sidebar from './component/sidebar'
import Introduction from './component/introduction'
import About from './component/about'
import Timeline from './component/timeline'
import Project from './component/projects'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
        <Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
          <About></About>
          <Project></Project>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
