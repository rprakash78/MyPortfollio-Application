import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/bg2.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{fontFamily:"sans-serif"}}>Hii! <br />I'm Prakash</h1>
                          <p className="text-dark"><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/18WI4u7hjoa_x5iOlx2L5u2YqcjjFpli_/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/bg4.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{fontFamily:"sans-serif"}}>I love developing<br /> Applications !!</h1>
                          <p className="text-dark"><a className="btn btn-primary btn-learn" href="https://github.com/rprakash78" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/bg5.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{fontFamily:"sans-serif"}}>My Hobbies</h1>
                          <p style={{fontSize:"25px"}}><i class='fas fa-bus-alt'></i> Travelling and Exploring places</p>
                          <p style={{fontSize:"25px"}}><i class='fa fa-book'></i> Learning new Technologies</p>
                          <p style={{fontSize:"25px"}}><i class='fa fa-paw'></i> Playing with pets</p>
                          <p style={{fontSize:"25px"}}><i class='fas fa-headphones'></i> Music</p>
                          <p style={{fontSize:"25px"}}><i class="fa fa-newspaper-o"></i> Newspaper and articles</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </ul>
          </div>
        </section>
      </div>
    )
  }
}
