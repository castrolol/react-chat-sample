import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout';


import './index.css';

injectTapEventPlugin();


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "rgb(81, 113, 158)",
  } 
});


ReactDOM.render(
  <MuiThemeProvider  muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
