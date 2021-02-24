import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLoading from './components/PageLoading';
import NotFound from './domain/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop';

const Landing = lazy(() => import('./domain/Landing/Landing'));
const About = lazy(() => import('./domain/About/About'));
const Submit = lazy(() => import('./domain/Submit/Submit'));
const Attend = lazy(() => import('./domain/Attend/Attend'));
const Winners = lazy(() => import('./domain/Winners/Winners'));
const Media = lazy(() => import('./domain/Media/Media'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<PageLoading />}>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/submit" exact component={Submit} />
          <Route path="/about" exact component={About} />
          <Route path="/attend" exact component={Attend} />
          <Route path="/winners" exact component={Winners} />
          <Route path="/media" exact component={Media} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Suspense>
  </BrowserRouter>
);

export default App;
