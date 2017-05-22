import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.css'
import './projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    $("#background0").hover(() => {
      $(".verys-image").toggleClass("hovered");
    });
  }

  render() {
    const experiences = [
      {
        letter: 'V',
        company: 'Verys',
        title: 'Software Engineer',
        imageName: 'verys-image'
      },
      {
        letter: 'C',
        company: 'Civility International',
        title: 'Chief Technology Officer',
        imageName: 'civility-image'
      },
      {
        letter: 'M',
        company: 'Momentum',
        title: 'Software Engineer',
        imageName: 'momentum-image'
      },
      {
        letter: 'H',
        company: 'Hack Reactor',
        title: 'Software Engineering Instructor',
        imageName: 'hackreactor-image'
      },
      {
        letter: 'H',
        company: 'HealthyU',
        title: 'Chief Technology Officer',
        imageName: 'healthyu-image'
      },
      {
        letter: 'S',
        company: 'Seat At the Table',
        title: 'Board Director & Software Engineer',
        imageName: 'seat-image'
      },
      {
        letter: 'W',
        company: 'Wobble Labs',
        title: 'Co-Founder',
        imageName: 'wobble-image'
      }
    ]
    return (
      <div className="projectsContainer">
        <div className="projectsContainer-header">
          <h1>Experience</h1>
        </div>
        {
          experiences.map((experience, index) => (
            <div className="projectsContainer-list" key={index}>
              <div className="projectsContainer-list-entry">
                <div className={`projectsContainer-list-entry-labelBox ${experience.imageName}`} id={`labelBox${index}`}>
                  <h1>{experience.letter}</h1>
                </div>
                <span className={`projectsContainer-list-entry-background`} id={`background${index}`} />
                <div className="projectsContainer-list-entry-heading">
                  <h1>{experience.company}</h1>
                  <h3>{experience.title}</h3>
                </div>
                <div className={`projectsContainer-list-entry-arrow arrow${index}`} id={`arrow${index}`}>
                  <FontAwesome
                    name='long-arrow-right'
                    size='3x'
                    style={{ textShadow: 'white' }}
                  />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Projects;