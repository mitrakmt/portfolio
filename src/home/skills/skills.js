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

    const clientData =
      [
        {
          img: 'https://www.sololearn.com/Icons/Courses/1024.png',
          title: 'JavaScript'
        },
        {
          img: 'https://facebook.github.io/react/img/logo.svg',
          title: 'React'
        },
        {
          img: 'https://angular.io/resources/images/logos/angular/angular.svg',
          title: 'Angular 1'
        },
        {
          img: 'https://www.ag-grid.com/images/angular2.png',
          title: 'Angular 2'
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
          img: 'http://www.mrc-productivity.com/blog/wp-content/uploads/2013/06/HTML5_SupportingElements_51.png',
          title: 'HTML5'
        },
        {
          img: 'https://html5hive.org/wp-content/uploads/2014/03/css-beginners-tutorial.jpg?x30206',
          title: 'CSS3'
        },
        {
          img: 'http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
          title: 'SASS/SCSS'
        },
        {
          img: 'http://www.exuberantsolutions.com/course_logo/jquery-icon.png',
          title: 'jQuery'
        }
      ]

    const serverData =
      [
        {
          img: 'http://thisdavej.com/wp-content/uploads/2016/02/nodejs-logo.png',
          title: 'Node'
        },
        {
          img: 'http://www.expressjs.com.cn/images/express.png',
          title: 'Express'
        },
        {
          img: 'https://avatars1.githubusercontent.com/u/10566080?v=3&s=400',
          title: 'Socket.io'
        },
        {
          img: 'https://azurecomcdn.azureedge.net/cvt-13f9af988a3bce151b5f3666660fb76825069825048a47e2c3f78ca61c38c685/images/page/services/cache/redis.png',
          title: 'Redis'
        }
      ]

      const databaseData =
        [
          {
            img: 'https://www.backupassist.com/images/features/sql-logo.png',
            title: 'MySQL'
          },
          {
            img: 'http://amartam.com/wp-content/uploads/2016/11/mongodb1.png',
            title: 'MongoDB'
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
            title: 'PostgreSQL'
          },
          {
            img: 'http://docs.sequelizejs.com/manual/asset/logo-small.png',
            title: 'Sequelize'
          },
          {
            img: 'http://www.erikasland.com/static/images/mongoose.png',
            title: 'Mongoose'
          }
        ]

      const testingData =
        [
          {
            img: 'https://cdn.auth0.com/blog/testing-react-with-jest/logo.png',
            title: 'Jest'
          },
          {
            img: 'https://camo.githubusercontent.com/431283cc1643d02167aac31067137897507c60fc/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67',
            title: 'Chai'
          },
          {
            img: 'https://cldup.com/xFVFxOioAU.svg',
            title: 'Mocha'
          }
        ]
  
    return (
      <div className="skillsContainer">
        <div className="skillsContainer-header">
          <h1>Skills</h1>
        </div>
        <div className="skillsContainer-listContainer">
          <h3>Client</h3>
          <div className="skillsContainer-listContainer-skillGroup">
            {
              clientData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill">
                  <img src={skill.img} />
                  <p>{skill.title}</p>
                </div>
              ))
            }
          </div>
          <h3>Server</h3>
          <div className="skillsContainer-listContainer-skillGroup">
            {
              serverData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill">
                  <img src={skill.img} />
                  <p>{skill.title}</p>
                </div>
              ))
            }
          </div>
          <h3>Database</h3>
          <div className="skillsContainer-listContainer-skillGroup">
            {
              databaseData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill">
                  <img src={skill.img} />
                  <p>{skill.title}</p>
                </div>
              ))
            }
          </div>
          <h3>Testing</h3>
          <div className="skillsContainer-listContainer-skillGroup">
            {
              testingData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill">
                  <img src={skill.img} />
                  <p>{skill.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;