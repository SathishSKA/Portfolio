import React from "react";
import { FaBootstrap } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

import resume from "../assets/rimsha-resume.pdf";

const About = () => {
  return (
    <div className="container-fluid bg-secondary pt-5 d-flex flex-column align-items-center min-vh-100">
      <p className="text-center text-light lead m-4">I'm a full stack web developer who love to create responsive websites using React JS, JavaScript, Bootstrap , Node Js and Mongo DB. I've done few own projects and looking for an opportunity to work and excel my skills in an organization and interested to explore and work on complex projects.</p>
      <h3 className="pt-5 pb-2 fw-bold custom-color">Languages and tools I use:</h3>
      <br />
      <p className="lead">
        <img className="me-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70" />
        <img className="m-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70" />
        <FaBootstrap className="m-2" style={{ width: "70", height: "70", color: "#7a14f5" }} />
        <img className="m-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60" />
        <img className="m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="60" height="60" />
        <img className="m-2" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" alt="Node JS" width="70" height="70" />
        <img className="ms-2" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg" alt="Mongo DB" width="70" height="70" />
        <img className="m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="60" height="60" />
        <img className="m-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="60" height="60" />
      </p>
      <h3 className="pt-3 pb-2 fw-bold custom-color">Educational Qualification </h3>
      <br />
      <h4>Bcom.(CS), MBA</h4>
      <p className="lead fw-bold" style={{ color: "#53c1f2" }}>
        {/* <SiFlutter className="m-2" style={{ width: "35", height: "35", color: "#53c1f2" }} />
        Flutter */}
      </p>

      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">
        Download My Resume
      </a>
    </div>
  );
};

export default About;
