import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import SearchContainer from './search_container';
import BenchFormContainer from './bench_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>BenchBnB</h1>
    <GreetingContainer />

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />

    <Route exact path="/" component={SearchContainer} />

    <Route path="/benches/new" component={BenchFormContainer} />
  </div>
);

export default App;
