import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route path='/clients' component={ Clients } />
            <Route path='/login' component={ Login } />
            <Route path='/register' component={ Register } />
            <Route exact path='/' component={ Home } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
