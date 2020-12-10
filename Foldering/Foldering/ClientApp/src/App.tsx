import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import FetchData from './components/FetchData';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
