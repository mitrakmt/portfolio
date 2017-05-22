import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'
import './contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contactContainer">
        <div className="contactContainer-header">
          <h5>Contact</h5>
          <h1>mike.mitrakos@gmail.com</h1>
        </div>
        <div className="contactContainer-social">
          <h5>Social</h5>
          <div className="contactContainer-social-list">
            <div>
              <a href="https://www.github.com/mitrakmt" target="_blank">Github</a>
              <div className="social-icon">
                <FontAwesome
                  name='github'
                  size='3x'
                />
              </div>
            </div>
            <div>
              <a href="https://www.angel.co/mike_mitrakos" target="_blank">Angelist</a>
              <div className="social-icon">
                <FontAwesome
                  name='angellist'
                  size='3x'
                />
              </div>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/michaelmitrakos" target="_blank">Linkedin</a>
              <div className="social-icon">
                <FontAwesome
                  name='linkedin'
                  size='3x'
                />
              </div>
            </div>
            <div>
              <a href="https://initjs.org" target="_blank">Medium</a>
              <div className="social-icon">
                <FontAwesome
                  name='medium'
                  size='3x'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
