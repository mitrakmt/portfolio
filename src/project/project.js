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
      techUsed: []
    };
  }

  componentWillMount() {
    let url = this.props.location.pathname.slice(9).toLowerCase();
    this.setState(projectsData[url])
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
                <p><span className="first-character sc">I</span>n 1978, Brian Smith landed in Southern California with a bag of sheepskin boots and hope. He fell in love with the sheepskin experience and was convinced the world would one day share this love. The beaches of Southern California had long been an epicenter of a relaxed, casual lifestyle, a lifestyle that Brian felt was a perfect fit for his brand. So he founded the UGG brand, began selling his sheepskin boots and they were an immediate sensation. By the mid 1980's, the UGG brand became a symbol of relaxed southern California culture, gaining momentum through surf shops and other shops up and down the coast of California, from San Diego to Santa Cruz. UGG boots reached beyond the beach, popping up in big cities and small towns all over, and in every level of society. Girls wore their surfer boyfriend's pair of UGG boots like a letterman jacket. When winter came along, UGG boots were in ski shops and were seen in lodges from Mammoth to Aspen.</p>
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
                <p><span className="first-character atw">W</span>hen the New York fashion community notices your brand, the world soon follows. The widespread love for UGG extended to Europe in the mid-2000's along with the stylish casual movement and demand for premium casual fashion. UGG boots and shoes were now seen walking the streets of London, Paris and Amsterdam with regularity. To meet the rising demand from new fans, UGG opened flagship stores in the UK and an additional location in Moscow. As the love spread farther East, concept stores were opened in Beijing, Shanghai and Tokyo. UGG Australia is now an international brand that is loved by all. This love is a result of a magical combination of the amazing functional benefits of sheepskin and the heightened emotional feeling you get when you slip them on your feet. In short, you just feel better all over when you wear UGG boots, slippers, and shoes.</p>
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
                    Under constructions :)
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
