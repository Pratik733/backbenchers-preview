import React from 'react';
import Header from './components/Header/Header.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Feature from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Demo from './components/Demo/Demo'
import Courses from './components/Courses/Courses'
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/feature" component={Feature}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/demo" component={Demo}/>
        <Route path='/courses' component={Courses}/>
      </Switch>
      <Footer/>
    </div>
  );
}
export default App;
