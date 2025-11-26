import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
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
  const history = useHistory();

  useEffect(() => {

    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {

        //console.log(e.wheelDeltaX);
        //console.log(e.wheelDeltaY);

        if(e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 1500);
        } 
        else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 1500);
        }
      }

      switch (window.location.toString()) {

        case url :
          if(e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push('project-1');
            }, 1500);
          }
          break;
        case url + "project-1":
          wheelRouter('project-2', '');
          break;
        case url + "project-2":
          wheelRouter('project-3', 'project-1');
          break;
        case url + "project-3":
          wheelRouter('project-4', 'project-2');
          break;
        case url + "project-4":
          wheelRouter('project-5', 'project-3');
          break;
        case url + "project-5":
          wheelRouter('project-6', 'project-4');
          break;
        case url + "project-6":
          wheelRouter('project-7', 'project-5');
          break;
        case url + "project-7":
          wheelRouter('project-8', 'project-6');
          break;
        case url + "project-8":
          wheelRouter('contact', 'project-7');
          break;
        case url + "contact" :
          if(e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push('project-7');
            }, 750);
          }
          break;
        default:
          console.log('nothing')
      }
    };

    window.addEventListener('wheel', handleScrollToElement)
  }, [history]);

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
