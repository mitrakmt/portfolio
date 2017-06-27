import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import projectsData from '../projectsData';
import image1 from '../images/momentum/image1.png';
import image2 from '../images/momentum/image2.png';
import 'font-awesome/css/font-awesome.css'
import './project.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
    cols: 1
  },
};


class Project extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      company: '',
      screenshots: {
        "image1": 'http://cdn.wallpapersafari.com/73/40/QVxjEq.jpg',
        "image2": 'http://cdn.wallpapersafari.com/73/40/QVxjEq.jpg',
        "image3": 'http://cdn.wallpapersafari.com/73/40/QVxjEq.jpg'
      },
      allPhotos: [],
      accomplishments: '',
      techUsed: []
    };
  }

  componentWillMount() {
    let url = this.props.location.pathname.slice(9).toLowerCase();
    this.setState(projectsData[url])
    window.scrollTo(0, 0);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    // <span className="first-character sc">I</span> for thing down below

    return (
      <div className="projectContainer">
        <div className="loadingAnimation">
          <h1>{ this.state.company }</h1>
        </div>
        <div className="projectContainer-landing">
          <div id="parallax-world-of-ugg">
            <section>
              <div className="title">
                <h1>{ this.state.company }</h1>
              </div>
            </section>

            <section>
              <div className="parallax parallax-one" style={{ backgroundImage: 'url(' + this.state.screenshots.image1 + ')', opacity: '0.5' }}></div>
            </section>

            <section>
              <div className="block">
                <h4>Accomplishments</h4>
                {
                  this.state.accomplishments.map(line => (
                    <p>{ line }</p>
                  ))
                }
              </div>
            </section>

            <section>
              <div className="parallax parallax-two" style={{ backgroundImage: 'url(' + this.state.screenshots.image2 + ')', opacity: '0.5' }}></div>
            </section>

            <section>
              <div className="block">
                <h4>Technologies Used</h4>
                <GridList
                    cellHeight={100}
                    style={styles.gridList}
                    padding={15}
                    cols={6}
                  >
                    {this.state.techUsed.map((tile) => (
                      <GridTile
                        key={tile}
                      >
                        <img src={tile} />
                      </GridTile>
                    ))}
                  </GridList>
              </div>
            </section>

            <section>
              <div className="parallax parallax-three" style={{ backgroundImage: 'url(' + this.state.screenshots.image3 + ')', opacity: '0.5' }}></div>
            </section>

            <section>
              <div className="block">
                <h4>Screenshots</h4>
                <div className="extra-screenshots">
                  <GridList
                    cellHeight={300}
                    style={styles.gridList}
                    padding={15}
                    cols={1}
                  >
                    <Subheader>Screenshots</Subheader>
                    {this.state.allPhotos.map((tile) => (
                      <GridTile
                        key={tile}
                        label="Dialog"
                        onTouchTap={this.handleOpen}
                      >
                        <img src={tile} />
                      </GridTile>
                    ))}
                  </GridList>
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                    Under construction :)
                  </Dialog>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
