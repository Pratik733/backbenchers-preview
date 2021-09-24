import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Feature from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Demo from "./components/Demo/Demo";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer.js";
import Privacy from "./components/Footer/Privacy";
import Services from "./components/Footer/Services";
import Refund from "./components/Footer/Refund";
import Guidelines from "./components/Footer/Guidelines";
import Code from "./components/Footer/Code";
import Quadrangle from "./components/Quadrangle/Quadrangle.js";
import Popup from "./components/Popup/popup.js";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";
import CourseDetail from "./components/Courses/CourseDetail.js";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-STCLDV2R09");

    ReactGa.pageview(window.location.pathname);
  });

  return (
    <div className="App">
      <Helmet
      >
        <title lang="en">
          GenieGradz
        </title>
        <meta charSet="utf-8" />
        <meta name="title" content="GenieGradz" />
        <meta name="description" content="GenieGradz, is a gamified learning platform, which focuses on helping students and exploring new career options, along with niche management" />
        <meta property="og:title" content="GenieGradz" />
        <meta
          name="keywords"
          content="GenieGradz, Geniegradz, GenieGradz edtech, geniegradz, Anwesh Biswas GenieGradz, Ashutosh Yadav, Mainak Saha, Akanksha Wagh, Gamified Learning,  Gamified Learning Platform, Digital University, rote learning, meme cheatsheet, meme based learning, collaborative learning, euphoria, quadrangle, brainzquad,"
        />
        <meta
          property="og:description"
          content="GenieGradz, is a gamified learning platform, which focuses on helping students and exploring new career options, along with niche management"
        />
        <meta
          name="og:keywords"
          content="GenieGradz, Geniegradz, GenieGradz Edtech, geniegradz, Brainzeo, brainzeo, Anwesh Biswas, Ashutosh Yadav, Mainak Saha, Akanksha Wagh, Gamified Learning, Anwesh Biswas GenieGradz,  Gamified Learning Platform, Digital University, rote learning, meme cheatsheet, meme based learning, collaborative learning, euphoria, quadrangle, brainzquad,"
        />
        <link rel="canonical" href="https://geniegradz.com/" />
      </Helmet>
      <Header />
      <Popup />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feature" component={Feature} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/beta" component={Demo} />
        <Route path="/courses" component={Courses} />
        <Route path='/coursedetails' component={CourseDetail} ></Route>
        <Route path="/privacy" component={Privacy} />
        <Route path="/services" component={Services} />
        <Route path="/code" component={Code} />
        <Route path="/refund" component={Refund} />
        <Route path="/guidelines" component={Guidelines} />
        <Route path="/quadrangle" component={Quadrangle} />
      </Switch>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App, rootElement);

export default App;
