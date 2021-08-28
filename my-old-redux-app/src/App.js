import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRoutes from './Components/Sections/SiteRoutes';
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';

/**
 * Title of the site
 */
const siteName = 'Dummy Data Live OLD Redux experiment';

function App() {
  return (
    <Container className="App">
      <Header title={siteName} />
      <Router>
          <SiteRoutes />
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
