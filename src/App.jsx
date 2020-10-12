import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './domain/Landing/Landing';
import About from './domain/About/About';
import NotFound from './domain/NotFound/NotFound';
import Submit from './domain/Submit/Submit';
import Attend from './domain/Attend/Attend';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/submit" exact component={Submit} />
      <Route path="/about" exact component={About} />
      <Route path="/attend" exact component={Attend} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
