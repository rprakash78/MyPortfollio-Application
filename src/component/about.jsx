import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta" style={{fontSize:"12px"}}>About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                        {/*<p>I am a computer science student from VIT University with Software Engineering as my major. I love exploring new technologies and learning them.</p> */}
                        <p style={{fontSize:"18px",textAlign:"justify"}}>I am Prakash from hosur, pursuing final year of Integrated M.Tech Software Engineering in VIT University. My academics can be stated as linear graph from my schooling till now. To highlight my technical knack, I am quite good at Java, Python and very much fond of developing web applications along with learning new technologies. Besides academics, I am a person who loves to turn failures into success based on the experience learnt during the fall and a person who likes event managing through which gained organizational and management skills. Identify your mistake before others does, so one such part which I, myself identified is the art of public speaking where i am working hard to improvise it.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta" style={{fontSize:"12px"}}>What I do?</span>
                <h2 className="colorlib-heading">Some of my Technical Skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building web applications using JavaScript,React,
                    Bootstrap, PHP, HTML, CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Programming Languages</h3>
                    <p>I have a good knowlege and experience on Java, Python, C, SQL, MongoDB</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
