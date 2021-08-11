import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

import Home from './container/Home/Home';
import Settings from './container/Settings/Settings'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/settings' exact component={Settings} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
