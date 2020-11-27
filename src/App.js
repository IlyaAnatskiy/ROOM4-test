import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import AboutArtistPage from './pages/AboutArtistPage';
import FindTrackPage from './pages/FindTrackPage';
import TracksPage from './pages/TracksPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Route exact path="/" component={TracksPage} />
        <Route exact path="/find" component={FindTrackPage} />
        <Route exact path="/about/:name" component={AboutArtistPage} />
      </div>
    </div>
  );
}

export default App;
