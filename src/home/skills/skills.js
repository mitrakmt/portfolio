import React, { Component } from 'react';
import $ from 'jquery';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import './skills.css';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'description'
    };
  }

  componentDidMount() {
    let $this = this;
    $.fn.isOnScreen = function(){
      var win = $(window);
      var viewport = {
          top : win.scrollTop(),
          left : win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();

      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    // $(document).ready(function(){
    //     $(window).scroll(function(){
    //       if ($('#clientSkillInViewport').isOnScreen()) {

    //       }

    //     });
    // });
  }

  changeTab = (event) => {
    let newState;
    let eventId = event.target.id;
    if (event.target.id[0] === 'd') {
      newState = 'description'
    } else {
      newState = 'experience'
    }
    this.setState({
      selectedTab: newState
    })
    $(`#${eventId}`).addClass('clickAnimation')
    setTimeout(() => {
      $(`#${eventId}`).removeClass('clickAnimation')
    }, 300)
  }

  render() {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

    const clientData =
      [
        {
          img: 'https://www.sololearn.com/Icons/Courses/1024.png',
          title: 'JavaScript',
          years: 5,
          description: ''
        },
        {
          img: 'https://facebook.github.io/react/img/logo.svg',
          title: 'React',
          years: 2,
          description: ''
        },
        {
          img: 'https://angular.io/resources/images/logos/angular/angular.svg',
          title: 'Angular',
          years: 4,
          description: ''
        },
        {
          img: 'https://www.ag-grid.com/images/angular2.png',
          title: 'Angular2',
          years: 1.5,
          description: ''
        },
        {
          img: 'http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png',
          title: 'Redux',
          years: 1,
          description: ''
        },
        {
          img: 'http://inversify.io/img/ts.png',
          title: 'TypeScript',
          years: 1,
          description: ''
        },
        {
          img: 'http://www.mrc-productivity.com/blog/wp-content/uploads/2013/06/HTML5_SupportingElements_51.png',
          title: 'HTML5',
          years: 5,
          description: ''
        },
        {
          img: 'https://html5hive.org/wp-content/uploads/2014/03/css-beginners-tutorial.jpg?x30206',
          title: 'CSS3',
          years: 5,
          description: ''
        },
        {
          img: 'http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
          title: 'SASS',
          years: 2,
          description: ''
        },
        {
          img: 'http://www.exuberantsolutions.com/course_logo/jquery-icon.png',
          title: 'jQuery',
          years: 4,
          description: ''
        }
      ]

    const serverData =
      [
        {
          img: 'http://thisdavej.com/wp-content/uploads/2016/02/nodejs-logo.png',
          title: 'Node',
          years: 3,
          description: ''
        },
        {
          img: 'http://www.expressjs.com.cn/images/express.png',
          title: 'Express',
          years: 2,
          description: ''
        },
        {
          img: 'https://avatars1.githubusercontent.com/u/10566080?v=3&s=400',
          title: 'Socket.io',
          years: 2,
          description: ''
        },
        {
          img: 'https://azurecomcdn.azureedge.net/cvt-13f9af988a3bce151b5f3666660fb76825069825048a47e2c3f78ca61c38c685/images/page/services/cache/redis.png',
          title: 'Redis',
          years: 1,
          description: ''
        }
      ]

      const databaseData =
        [
          {
            img: 'https://www.backupassist.com/images/features/sql-logo.png',
            title: 'MySQL',
            years: 2,
            description: ''
          },
          {
            img: 'http://amartam.com/wp-content/uploads/2016/11/mongodb1.png',
            title: 'MongoDB',
            years: 2,
            description: ''
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
            title: 'PostgreSQL',
            years: 2,
            description: ''
          },
          {
            img: 'http://docs.sequelizejs.com/manual/asset/logo-small.png',
            title: 'Sequelize',
            years: 2,
            description: ''
          },
          {
            img: 'http://www.erikasland.com/static/images/mongoose.png',
            title: 'Mongoose',
            years: 2,
            description: ''
          }
        ]

      const testingData =
        [
          {
            img: 'https://cdn.auth0.com/blog/testing-react-with-jest/logo.png',
            title: 'Jest',
            years: 0.5,
            description: ''
          },
          {
            img: 'https://camo.githubusercontent.com/431283cc1643d02167aac31067137897507c60fc/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67',
            title: 'Chai',
            years: 1.5,
            description: ''
          },
          {
            img: 'https://cldup.com/xFVFxOioAU.svg',
            title: 'Mocha',
            years: 1.5,
            description: ''
          }
        ]
  
    return (
      <div className="skillsContainer">
        <div className="skillsContainer-header">
          <h1>Skills</h1>
        </div>
        <div className="skillsContainer-listContainer">
          <h3>Client</h3>
          <div className="skillsContainer-listContainer-skillGroup" id="clientSkillInViewport">
            {
              clientData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill" key={skill.title + i}>
                  <img src={skill.img} className={`clientData${i}`} alt={skill.title} />
                  <p>{skill.title}</p>
                  <div className="skillsContainer-listContainer-skillGroup-skill-bar">
                    <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs">
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`description${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'description' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Description
                      </div>
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`experience${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'experience' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Experience
                      </div>
                    </div>
                    {
                      this.state.selectedTab === 'description' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.description}</p>
                        </div>
                    }
                    {
                      this.state.selectedTab === 'experience' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.years}</p>
                        </div>
                    }
                  </div>
                </div>
              ))
            }
          </div>
          <h3>Server</h3>
          <div className="skillsContainer-listContainer-skillGroup" id="serverSkillInViewport">
            {
              serverData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill" key={skill.title + i}>
                  <img src={skill.img} className={`serverData${i}`} alt={skill.title} />
                  <p>{skill.title}</p>
                  <div className="skillsContainer-listContainer-skillGroup-skill-bar">
                    <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs">
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`description${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'description' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Description
                      </div>
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`experience${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'experience' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Experience
                      </div>
                    </div>
                    {
                      this.state.selectedTab === 'description' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.description}</p>
                        </div>
                    }
                    {
                      this.state.selectedTab === 'experience' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.years}</p>
                        </div>
                    }
                  </div>
                </div>
              ))
            }
          </div>
          <h3>Database</h3>
          <div className="skillsContainer-listContainer-skillGroup" id="databaseSkillInViewport">
            {
              databaseData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill" key={skill.title + i}>
                  <img src={skill.img} className={`databaseData${i}`} alt={skill.title} />
                  <p>{skill.title}</p>
                  <div className="skillsContainer-listContainer-skillGroup-skill-bar">
                    <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs">
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`description${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'description' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Description
                      </div>
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`experience${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'experience' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Experience
                      </div>
                    </div>
                    {
                      this.state.selectedTab === 'description' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.description}</p>
                        </div>
                    }
                    {
                      this.state.selectedTab === 'experience' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.years}</p>
                        </div>
                    }
                  </div>
                </div>
              ))
            }
          </div>
          <h3>Testing</h3>
          <div className="skillsContainer-listContainer-skillGroup" id="testingSkillInViewport">
            {
              testingData.map((skill, i) => (
                <div className="skillsContainer-listContainer-skillGroup-skill" key={skill.title + i}>
                  <img src={skill.img} className={`testingData${i}`} alt={skill.title} />
                  <p>{skill.title}</p>
                  <div className="skillsContainer-listContainer-skillGroup-skill-bar">
                    <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs">
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`description${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'description' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Description
                      </div>
                      <div className="skillsContainer-listContainer-skillGroup-skill-bar-tabs-item" id={`experience${skill.title}${i}`} onClick={this.changeTab.bind(this)} style={this.state.selectedTab === 'experience' ? {borderBottom: '2px solid #e1253b'} : {}}>
                        Experience
                      </div>
                    </div>
                    {
                      this.state.selectedTab === 'description' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.description}</p>
                        </div>
                    }
                    {
                      this.state.selectedTab === 'experience' &&
                        <div className="skillsContainer-listContainer-skillGroup-skill-bar-info">
                          <p>{skill.years}</p>
                        </div>
                    }
                  </div>
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