import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="text-center mx-auto">
      <h1>World Tour</h1>
      <header className="header">
        <h1 className="header-title">Always Choose Good</h1>
        <p className="header-description container">
          Biblical Study Trips
          Travel the Text offers 9-14 day study programs to the lands of the Bible. All programs are designed for those who dream of visiting the land of the Bible as serious students of the Text. Each study program offers a unique curriculum developed and taught by Geoff Carroll. All study is on-site, as we seek to engage the land from the perspectives of the original audience.

        </p>

      </header>
      <div className="row container w-100 m-auto">
        <div className="col-md-6 col-lg-6 col-sm-12 second-section-img">
          <img className="h-100 w-100" src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?size=338&ext=jpg" alt="" />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 second-sendtion">
          <h2 className="second-sendtion-title">Know Us</h2>
          <p className="second-sendtion-desc container">

            <span className="about-p">P</span> Travel the Text offers 9-14 day study programs to the lands of the Bible. All programs are designed for those who dream of visiting the land of the Bible as serious students of the Text. Each study program offers a unique curriculum developed and taught by Geoff Carroll. All study is on-site, as we seek to engage the land from the perspectives of the original audience.

            *Per Covid-19 all study trip dates are currently subject to change and we are not currently adding new group members to any existing trips. We do have a waitlist and will email this group when we are able to begin planning new trips, and/or filling available spaces on upcoming trips that have been already planned or rescheduled. Please click here to add your name to that list!
          </p>
        </div>

      </div>

      <div className="third-section text-center mt-5">
        <h2 className="third-section-title ">
          Out Travel{" "}
          <span style={{ fontSize: "200%", color: "tomato" }}>g</span>uide
        </h2>
        <p className="third-section-desc mt-3">

        </p>
      </div>

      <div className="row container w-100 m-auto expert-section">
        <div className="col-md-6 col-lg-3 col-sm-12 expert h-200 w-200">
          <img className="h-200 w-200" src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
          <h4>Mr.Robert Bruce</h4>
          <h5 className="mt-2">Natural specialist</h5>
          <h6>From London</h6>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 expert h-200 w-200">
          <img className="h-200 w-200" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
          <h4>Mr.Mukharjee</h4>
          <h5 className="mt-2">History specialist</h5>
          <h6>From Kolkata</h6>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 expert h-200 w-200">
          <img className="h-200 w-200" src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
          <h4>Ms.Suchy</h4>
          <h5 className="mt-2">Map specialist</h5>
          <h6>From Mayanmay</h6>
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 expert h-200 w-200">
          <img className="h-200 w-200" src="https://images.unsplash.com/photo-1605038593290-475661bfbba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
          <h4>Mr.Kasem Khan</h4>
          <h5 className="mt-2">Travel specialist</h5>
          <h6>From Bangladesh</h6>
        </div>
      </div>
      <div className="four-section">
        <div className="expert-1">
          <h2>All Guide </h2>
          <img src="
          https://media.istockphoto.com/photos/they-are-the-best-in-their-field-picture-id531722057?s=612x612" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
