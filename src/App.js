import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';
import Chat from './components/Chat';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      infoOpen: false
    };

  }

  handlePanelToggle() {

    this.setState({
      infoOpen: !this.state.infoOpen
    });

  }

  render() {

    const {infoOpen} = this.state;

    return (
      <Layout isInfoOpen={infoOpen} onInfoClick={() => this.handlePanelToggle()}   >
        <Chat isInfoOpen={infoOpen} onInfoClick={() => this.handlePanelToggle()} />
      </Layout>
    );
  }
}

export default App;
