import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about1.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Prakash R</a></h1>
              <span className="email" style={{color:"blue"}}><i className="icon-mail"><u>prakashr7898@gmail.com</u>  </i></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                <br/>
                  <li className="active"><a href="#home" data-nav-section="home" style={{fontSize:"15px"}}>Introduction</a></li>
                  <li><a href="#about" data-nav-section="about" style={{fontSize:"15px"}}>About</a></li>
                  <li><a href="#projects" data-nav-section="projects" style={{fontSize:"15px"}}>Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline" style={{fontSize:"15px"}}>Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100011772755918" target="_blank" rel="noopener noreferrer"><i style={{fontSize:"25px"}} className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/Pr_a_k_a_s_h" target="_blank" rel="noopener noreferrer"><i style={{fontSize:"25px"}} className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/prakash_78_/" target="_blank" rel="noopener noreferrer"><i style={{fontSize:"25px"}} className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/prakash-ram/" target="_blank" rel="noopener noreferrer"><i style={{fontSize:"25px"}} className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/rprakash78" target="_blank" rel="noopener noreferrer"><i style={{fontSize:"25px"}} className="icon-github"></i></a></li>
              </ul>
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
