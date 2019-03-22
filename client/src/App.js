import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Example from "./pages/Example";
import ExampleForm from "./pages/basicInfo";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import QuestionForm from './components/Questions/QuestionCard';


function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/example/:id" component={Example} />
          <Route exact path="/newexample" component={ExampleForm} />
          <Route component={NoMatch} />
          <Route component={QuestionForm} />
        </Switch>
      </>
    </Router>
  );
}

export default App;