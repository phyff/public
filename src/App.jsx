import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './domain/Landing/Landing';
import About from './domain/About/About';
import NotFound from './domain/NotFound/NotFound';
import Guide from './domain/Guide/Guide';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/guide" exact component={Guide} />
      <Route path="/about" exact component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
