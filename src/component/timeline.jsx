import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta" style={{fontSize:"12px"}}>highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Crescent TechnoSoft - Bangalore <span>April - May, 2019</span></h2>
                        <p>I completed my Internship at the Crescent Technosoft as a Front-End Developer-Intern in the development team. My major part of the work has been into the field of developing & designing front end interfaces for the projects. I learnt newer technologies like Bootstrap 4, JQuery, PHP.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Integrated M.Tech at VIT University<span> 2016-Present</span></h2>
                        <p>I am pursuing my under-graduation studies with major in Software Engineering. I have taken courses like DSA, OOPs, Computer Networks, Database, Web Development over the years and have better understanding of these subjects. I have also been part of Sports Club in which i have organised few events.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Grade 12 <span>2015-2016</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics, Chemistry, Maths & Computer Science with 91% merit from Sri Vijay Vidyalaya school, Hosur. During my time at school, I have developed interest in the field of computer science & engineering.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Grade 10 <span>2013-2014</span></h2>
                        <p>I have completed my grade 10 from Maharishi Vidya Mandir, Hosur with 8.4 CGPA.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
