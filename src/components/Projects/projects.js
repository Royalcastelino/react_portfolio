import React from "react";
import './projects.css'
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';

import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import project2 from '../../assets/project2.jpg';
const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectstitle">My Projects</h2>
      <div className="allprj" style={{ display: 'flex' }}>
        <Card className="project1">
          <Card.Img className="prjimg" src={project1} alt="logo" />
          <Card.Body>
            <Card.Title className="prj1title">Souza Furniture Mart</Card.Title>
            <Card.Text className="prj1des">
              E-commerce website for buying and selling furniture’s designed for our client Souza furniture’s. Here our
              client can display their wide range of furniture’s and the customer who has logged into our website can buy
              desired products without any hassle.
            </Card.Text>
            <div>
              <a className="github" href="https://github.com/Royalcastelino/Furniture-Website"><FontAwesomeIcon icon={faGithub}/>GitHub</a>
            </div>
          </Card.Body>
        </Card>

        <Card className="project1">
          <Card.Img className="prjimg" src={project2} alt="logo" />
          <Card.Body>
            <Card.Title className="prj1title">React Weather Forecast</Card.Title>
            <Card.Text className="prj1des">
            Explore real-time weather updates effortlessly with our React-based online weather forecast site. Experience a sleek and intuitive interface that provides accurate and up-to-date weather information.
            </Card.Text>
            <div>
              <a className="github" href="https://github.com/Royalcastelino/React_weather"><FontAwesomeIcon icon={faGithub}/>GitHub</a>
            </div>
          </Card.Body>
        </Card>

        <Card className="project1">
          <Card.Img className="prjimg" src={project3} alt="logo" />
          <Card.Body>
            <Card.Title className="prj1title">Badminton Score</Card.Title>
            <Card.Text className="prj1des">
            An intuitive Android badminton score recording app designed to streamline and enhance your badminton matches, 
            providing a user-friendly interface for effortlessly capturing and managing game scores, ensuring an efficient and enjoyable experience for players.
            </Card.Text>
            <div>
              <a className="github" href="https://github.com/Royalcastelino/Badminton_score"><FontAwesomeIcon icon={faGithub}/>GitHub</a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};
export default Projects;