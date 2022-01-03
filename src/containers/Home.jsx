import React from 'react';
import ContactButton from '../components/ContactButton';
import Header from '../components/Header';
import MenuManager from '../components/Menu/MenuManager';

import '../styles/Home.scss';

const Home = () => {
  return (
    <MenuManager>
      <Header />
      <div className="main-container" id="main-container">
        <h1>
          Bleu
          <br />
          Blanc
          <br />
          Studio
        </h1>

        <ContactButton />
      </div>
    </MenuManager>
  );
};
export default Home;
