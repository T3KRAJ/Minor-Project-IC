import React from 'react';
import Classifier from "./components/classifier/Classifier"
import Navbar from './components/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Images from './components/Images';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Route exact path='/' component = {Classifier} />
        <Route path='/history' component = {Images}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
