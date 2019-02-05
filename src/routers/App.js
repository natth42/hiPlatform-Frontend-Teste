import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../components/login/login';
import Home from '../components/home/home';
import ListDetails from '../components/listDetails/listDetails';
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
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                    <Route path="/lista" component={Home} exact={true} />
                    <Route path='/lista/detalhes/:type/:id' component={ListDetails} />
                    <Route component={PageNoteFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
