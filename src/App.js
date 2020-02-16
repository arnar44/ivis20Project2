import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './routes/notFound/NotFound';



/* todo fleiri routes */

import './App.css';

class App extends Component {


  render() {

    return (
      <main className="main">
        <Switch location={this.props.location}>
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;