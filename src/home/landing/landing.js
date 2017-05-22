import React, { Component } from 'react';
import classNames from 'classnames';
import FontIcon from 'material-ui/FontIcon';
import ActionMenu from 'material-ui/svg-icons/action/reorder';
import './landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      menuActive: false
    };
  }

  activateMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    });
  }

  render() {
    return (
      <div>
        <div className={classNames('sidebar', {'sidebar-active': this.state.menuActive})}>
          
        </div>
        <div className="backgroundImage" />
        <div className="landingContainer">
          <div className="landingContainer-lineLeft" />
          <div className="landingContainer-lineTop" />
          <div className="landingContainer-lineRight" />
          <div className="landingContainer-lineBottom" />
          {/* Main Content */}
          <div className="landingContainer-header" style={!this.state.menuActive ? {opacity: 1} : {opacity: 0}}>
            <h1>Michael</h1>
            <h1>Mitrakos</h1>
            <div className="landingContainer-header-sub">
              <h4>Software Developer</h4>
              <span className="landingContainer-header-sub-whiteLinLhorizontal01" />
              <span className="landingContainer-header-sub-whiteLinLhorizontal02" />
            </div>
          </div>

          <div className="landingContainer-header" style={this.state.menuActive ? {opacity: 1} : {opacity: 0}}>
            <div className="landingContainer-header-menuBar">
              <h3>Menu</h3>
              <h3>Menu</h3>
            </div>
          </div>

          {/* Bottom Text */}
          <a className="landingContainer-discover">
            DISCOVER MY WORKS ↓
          </a>

          {/* Menu Button */}
          <div
            className={classNames("landingContainer-menuButton", { 'landingContainer-menuButton-line-active': this.state.menuActive })}
            onClick={this.activateMenu.bind(this)}
          >
            <div className={classNames("landingContainer-menuButton-line", { 'landingContainer-menuButton-line-active': this.state.menuActive })} />
            <div className={classNames("landingContainer-menuButton-line", { 'landingContainer-menuButton-line-active': this.state.menuActive })} />
            <div className={classNames("landingContainer-menuButton-line", { 'landingContainer-menuButton-line-active': this.state.menuActive })} />
          </div>

          {/* Left Navigation */}
          <div className="landingContainer-navIntro"><a href="about-me.html">About me &amp; Contact</a></div>

          {/* Right Navigation */}
          <nav className="landingContainer-social">
            <a href="http://www.github.com/mitrakmt" target="_blank"> GITHUB </a>
            <span> - </span>
            <a href="https://www.angel.co/mike_mitrakos" target="_blank"> ANGELIST </a>
            <span> - </span>
            <a href="https://www.linkedin.com/in/michaelmitrakos" target="_blank"> LINKEDIN</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Landing;