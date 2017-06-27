import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import projectsData from '../../projectsData';
import 'font-awesome/css/font-awesome.css'
import './projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    $(".projectsContainer-list-entry-arrow").hover((e) => {
      let idLength = e.target.id.length;
      let id = e.target.id[idLength - 1]
      if (e.type === 'mouseenter') {
        $(`#background${id}`).trigger("hover");
      } else {
        $(`#background${id}`).trigger("hover");
      }
    });
  }

  render() {
    return (
      <div className="projectsContainer">
        <div className="projectsContainer-header">
          <h1>Experience</h1>
        </div>
        {
          projectsData.list.map((experience, index) => (
            <div className="projectsContainer-list" key={index}>
              <div className="projectsContainer-list-entry" id={index}>
                <div className="projectsContainer-list-entry-labelBox">
                  <h1>{experience.letter}</h1>
                </div>
                <span className={`projectsContainer-list-entry-background`} id={`background${index}`} />
                <div className="projectsContainer-list-entry-heading">
                  <h1>{experience.company}</h1>
                  <h3>{experience.title}</h3>
                </div>
                <div className={`projectsContainer-list-entry-arrow arrow${index}`} id={`arrow${index}`}>
                  <Link className="arrow-link" to={`/project/${experience.tagName}`} style={{textDecoration: 'none',  padding: '40px'}}>
                    <FontAwesome
                      name='long-arrow-right'
                      size='3x'
                      style={{ textShadow: 'white' }}
                    />
                  </Link>
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