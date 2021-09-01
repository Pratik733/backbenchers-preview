import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Feature from './components/Features/Features'
import Pricing from './components/Pricing/Pricing'
import Demo from './components/Demo/Demo'
import Courses from './components/Courses/Courses'
import Footer from './components/Footer/Footer.js'
import Privacy from './components/Footer/Privacy'
import Services from './components/Footer/Services'
import Refund from './components/Footer/Refund'
import Guidelines from './components/Footer/Guidelines'
import Code from './components/Footer/Code'
import Quadrangle from './components/Quadrangle/Quadrangle.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/feature" component={Feature}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/beta" component={Demo}/>
        <Route path='/courses' component={Courses}/>
        <Route path='/privacy' component={Privacy}/>
        <Route path='/services' component={Services}/>
        <Route path='/code' component={Code}/>
        <Route path='/refund' component={Refund}/>
        <Route path='/guidelines' component={Guidelines}/>
        <Route path='/quadrangle' component={Quadrangle}/>
      </Switch>
      <Footer/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App, rootElement);

export default App;
