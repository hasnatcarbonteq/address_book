import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

import HomeContainer from './container/Home/HomeContainer';
import SettingsContainer from './container/Settings/SettingsContainer'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' exact component={HomeContainer} />
                    <Route path='/settings' exact component={SettingsContainer} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
