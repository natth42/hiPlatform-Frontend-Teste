import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/home/home';
import PageNoteFound from '../components/pageNotFound/pageNotFound';

import './App.scss';

class AppRouter extends React.Component {
  componentDidMount() {
    document.documentElement.lang = 'pt-BR';
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route component={PageNoteFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
