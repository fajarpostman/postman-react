/**
 * Copyright (c) 2021 Fajar Postman.
 * Reactjs Project Template Modification
 * Please Contact our email for more information :
 * @office contact@fajarpostman.com
 *
 * Description of App
 *
 * @author Fajar Dwi Rianto fajar@fajarpostman.com
 *
 * @version 1.0
 */

import logo from "./logo.svg";
import "./App.scss";
import "../Styles/Styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../Home/Home";
import Welcome from "../Welcome/Welcome";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <> 
    <Router>
      <Switch>
        <Route exact path="/" component={ Welcome } />
        <Route path="/home" component={ Home } />
        <Route path="/navigation" component={ Navigation } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
