import './App.css';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section></Section>
    </div>
  );
}

export default App;
