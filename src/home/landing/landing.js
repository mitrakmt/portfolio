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
          <div className="landingContainer-header" style={!this.state.menuActive ? {opacity: 1, position: 'absolute'} : {opacity: 0, position: 'absolute'}}>
            <h1>Michael</h1>
            <h1>Mitrakos</h1>
            <div className="landingContainer-header-sub">
              <h4>Software Developer</h4>
              <span className="landingContainer-header-sub-whiteLinLhorizontal01" />
              <span className="landingContainer-header-sub-whiteLinLhorizontal02" />
            </div>
          </div>

          <div className="landingContainer-header" style={this.state.menuActive ? {opacity: 1, position: 'absolute'} : {opacity: 0, position: 'absolute'}}>
            <div className="landingContainer-header-menuList">
              <h2>Experience</h2>
              <span className="small-divider" />
              <h4>Verys</h4>
              <h4>Civility International</h4>
              <h4>Momentum Dashboard</h4>
              <h4>HealthyU</h4>
              <h4>Seat At the Table</h4>
              <h4>Wobble Labs</h4>
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