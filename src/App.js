import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './container/Home';
import { Provider } from "react-redux";
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
