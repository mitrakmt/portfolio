import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './home/home';
import './App.css';

class App extends Component {
  render() {
    injectTapEventPlugin();
    const muiTheme = getMuiTheme({
      appBar: {
        height: 50,
        backgroundColor: 'rgb(255, 255, 255)'
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App" >
          <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
