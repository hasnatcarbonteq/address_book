import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DataGrid from './components/DataGrid/DataGrid.jsx';
import { Provider } from "react-redux";
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' component={DataGrid} />
                    <Route path='/user/:username' component={DataGrid} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
