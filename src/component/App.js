import React from 'react';
import Nav from './nav/nav';
import Hero from './hero/hero'
import SemiMenu from './semiMenu/semiMenu';
import WriteUps from './writeUps/writeUps';
import Footer from './footer/footer';

function App() {
  return (
      <div>
        <Nav />
        <Hero />
        <SemiMenu />
        <WriteUps />
        <Footer />
      </div>
  );
}

export default App
