import React from 'react';
import Navigation from './components/Navigation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import PageRender from './PageRender';

import './scss/global.scss';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navigation />

                <Switch>
                    <Route path='/:page' component={PageRender} />
                    <Route path='/' render={() => <Redirect to='/home' />} />
                    <Route component={() => 404} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
