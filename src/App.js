import React from 'react';
import './App.css';
import Home from './features/Home/Home.js';
import Header from './features/Header/Header.js';
import Subreddits from './features/Subreddits/Subreddits.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;