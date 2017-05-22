import React, { Component } from 'react';
import classNames from 'classnames';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './skills.css';

class Skills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        lineHeight: '0 !important'
      },
      gridList: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        lineHeight: '0 !important'
      },
    };
    const tilesData = [
      {
        img: 'http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png',
        title: 'JavaScript'
      },
      {
        img: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-white.png',
        title: 'Node'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'React'
      },
      {
        img: 'https://www.ag-grid.com/images/angular2.png',
        title: 'Angular 1 & 2'
      },
      {
        img: 'http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png',
        title: 'Redux'
      },
      {
        img: 'http://inversify.io/img/ts.png',
        title: 'TypeScript'
      },
      {
        img: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/courses/2479876/14570828119302_illu-cours_html5-css3.png',
        title: 'HTML5'
      },
      {
        img: 'https://html5hive.org/wp-content/uploads/2014/03/css-beginners-tutorial.jpg?x30206',
        title: 'CSS3'
      },
      {
        img: 'http://www.exuberantsolutions.com/course_logo/jquery-icon.png',
        title: 'jQuery'
      },
      {
        img: 'http://amartam.com/wp-content/uploads/2016/11/mongodb1.png',
        title: 'MongoDB'
      },
      {
        img: 'https://www.backupassist.com/images/features/sql-logo.png',
        title: 'SQL'
      },
      {
        img: 'https://cdn.auth0.com/blog/testing-react-with-jest/logo.png',
        title: 'Jest'
      }
    ];
    return (
      <div className="skillsContainer">
        <div className="skillsContainer-header">
          <h1>Skills</h1>
        </div>
        <div className="skillsContainer-listContainer">
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              <Subheader>Skills</Subheader>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;