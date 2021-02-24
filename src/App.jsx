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
const VirtualScreeningRoom = lazy(() => import('./domain/VirtualScreeningRoom/VirtualScreeningRoom'));
const Films = lazy(() => import('./domain/VirtualScreeningRoom/components/Films'));
const Reels = lazy(() => import('./domain/VirtualScreeningRoom/components/Reels'));
const Screenplays = lazy(() => import('./domain/VirtualScreeningRoom/components/Screenplays'));

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
          <Route path="/virtual-screening-room" exact component={VirtualScreeningRoom} />
          <Route path="/virtual-screening-room/films" exact component={Films} />
          <Route path="/virtual-screening-room/reels" exact component={Reels} />
          <Route path="/virtual-screening-room/screenplays" exact component={Screenplays} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Suspense>
  </BrowserRouter>
);

export default App;
