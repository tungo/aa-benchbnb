import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import BenchIndexContainer from './bench_index_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>BenchBnB</h1>
    <GreetingContainer />

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />

    <Route exact path="/" component={BenchIndexContainer} />
  </div>
);

export default App;
