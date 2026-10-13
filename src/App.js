import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
} from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  // Navigation à la molette désactivée : on passe d'une page à l'autre
  // uniquement avec les flèches (ScrollButton).

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Home} />
      <Route exact path="/project-1" component={Project1} />
      <Route exact path="/project-2" component={Project2} />
      <Route exact path="/project-3" component={Project3} />
      <Route exact path="/project-4" component={Project4} />
      <Route exact path="/project-5" component={Project5} />
      <Route exact path="/project-6" component={Project6} />
      <Route exact path="/project-7" component={Project7} />
      <Route exact path="/project-8" component={Project8} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
