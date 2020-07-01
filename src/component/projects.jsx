import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
		<section className="colorlib-work" data-section="projects">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span className="heading-meta" style={{fontSize:"12px"}}>My Work</span>
							<h2 className="colorlib-heading animate-box">Projects</h2>
					</div>
				</div>
				<div class="card" style={{padding:"20px"}}>
				
					<div class="card-header bg-dark" style={{padding:"20px",height:"70px"}}>
					  <h2 style={{color:"white",fontSize:"25px"}}>Automatic Electric Power Controller</h2>
					</div>
					<div class="card-body bg-light" style={{padding:"20px"}}>
						<p class="card-text text-dark" >An embedded system which automatically controls electric power
					  	to the room based on visitor count.<br/>
					  	Arduino is used as a micro controller.
					  	IR Sensors are used for object detection.
					   </p>
					  <p className="font-weight-bold">Technologies used : Embedded C</p>

					  <a href="https://github.com/rprakash78/Automatic-Electric-Power-Conctroller" class="btn btn-primary">Check here</a>
					</div>
				  </div>
				  <br/>
				  <div class="card" style={{padding:"20px"}}>
					<div class="card-header bg-dark" style={{padding:"20px",height:"70px"}}>
					  <h2 style={{color:"white",fontSize:"25px"}}>TeeesKart – Ecommerce Portal</h2>
					</div>
					<div class="card-body bg-light" style={{padding:"20px"}}>
						<p class="card-text text-dark"> A web application which allows user to shop virtually through internet to buy the desired items.</p>
					  <p className="font-weight-bold">Technologies used : Bootstrap, JQuery,  JavaScript, PHP, MySQL
					  </p>

					  <a href="https://github.com/rprakash78/TeeesKart-Eccommerce" class="btn btn-primary">Check here</a>
					</div>
				  </div>
				  <br/>
				  <div class="card" style={{padding:"20px"}}>
					<div class="card-header bg-dark" style={{padding:"20px",height:"70px"}}>
					  <h2 style={{color:"white",fontSize:"25px"}}>ToDo Application</h2>
					</div>
					<div class="card-body" style={{padding:"20px"}}>
						<p class="card-text text-dark"> A simple todo application. ToDo App is simple and awesome web app to organize your tasks with very easy to use interface. </p>
					  <p className="font-weight-bold">Technologies used : ReactJs, Bootstrap
					  </p>

					  <a href="https://github.com/rprakash78/ToDo-Application" class="btn btn-primary">Check here</a>
					</div>
				  </div>

				  <div class="card" style={{padding:"20px"}}>
					<div class="card-header bg-dark" style={{padding:"20px",height:"70px"}}>
					  <h2 style={{color:"white",fontSize:"25px"}}>Advice Application using reactjs</h2>
					</div>
					<div class="card-body" style={{padding:"20px"}}>
						<p class="card-text text-dark">A Simple Advice application created using reactjs and advice api</p>
					  <p className="font-weight-bold">Technologies used : ReactJs, Bootstrap
					  </p>

					  <a href="https://github.com/rprakash78/react-advice-app" class="btn btn-primary">Check here</a>
					</div>
				  </div>

				  <div class="card" style={{padding:"20px"}}>
					<div class="card-header bg-dark" style={{padding:"20px",height:"70px"}}>
					  <h2 style={{color:"white",fontSize:"25px"}}>House Price Prediction</h2>
					</div>
					<div class="card-body" style={{padding:"20px"}}>
						<p class="card-text text-dark"> A project which predicts the house prices in Bangalore based on the input parameters developed by machine learning algorithms. </p>
					  <p className="font-weight-bold">Technologies used : Python, Flask, JavaScript, Html, CSS
					  </p>

					  <a href="https://github.com/rprakash78/House-Price-Prediction" class="btn btn-primary">Check here</a>
					</div>
				  </div>
				  </div>
				</section>
      </div>
    )
  }
}
