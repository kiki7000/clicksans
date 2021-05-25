import React from 'react';
import './styles/App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './routes/Main';
import Store from './routes/Store';
import NotFound from './routes/NotFound';
import Navbar from './components/Navbar';


const App = () => {
    if (!localStorage.money) localStorage.money = 0;
    if (!localStorage.add) localStorage.add = 1;
    if (!localStorage.level || localStorage.level > 5) localStorage.level = 1;

    return (
        <SnackbarProvider>
            <CssBaseline />
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path = '/' component = {Main} />
                    <Route path = '/store' component = {Store} />
                    <Route component = {NotFound} />
                </Switch>
            </BrowserRouter>
        </SnackbarProvider>
    );
}

export default App;
