import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-secondary p-5 min-vh-100">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start">
            <h1 className="">Hi, I'm Sathish Kumar</h1>
            <h4 className="fw-bold custom-font">Full Stack Web Developer</h4> <br />
            <p className="pt-5"> Java Script | React JS | Node JS | Express | Mongo DB</p>
            <NavLink to="/projects">
              <button className="btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2">My Work</button>
            </NavLink>
          </div>
          <div>
            <Player src="https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json" className="player" loop autoplay style={{ maxHeight: "700px", maxWidth: "700px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
