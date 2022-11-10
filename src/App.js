import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/catalog' element={<CatalogPage></CatalogPage>}></Route>
        </Routes>
      </div>
    );

  }

}

export default App;
