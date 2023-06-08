import React from "react";
import './App.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Home from '../src/pages/Home';
import ParkingCamera from '../src/pages/ParkingCamera'

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <Routes>
                <Route exact path = '/' element = {<Home />}/>
                <Route exact path = '/ParkingCamera' element = {<ParkingCamera />} />
            </Routes>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
