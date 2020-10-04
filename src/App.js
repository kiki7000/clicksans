import React from 'react'
import './styles/App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import Main from './routes/Main'
import Store from './routes/Store'
import NotFound from './routes/NotFound'
import Navbar from './components/Navbar'


const App = () => {
    if (!localStorage.money) localStorage.money = 0;
    if (!localStorage.add) localStorage.add = 1;

    return (
        <>
            <CssBaseline />
            <Navbar />

            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component = {Main} />
                    <Route path = '/store' component = {Store} />
                    <Route component = {NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
