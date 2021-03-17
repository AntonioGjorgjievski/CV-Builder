import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/Home/Home";
import Category from "./components/ChooseCategory/Category";
import BuildCV from "./components/MainContainer/BuildCV";
import Popup from "./components/Popup/Popup";

import { ContextProvider } from "./Context/ContextProvider";

function App() {
  const [clickedCategory, setClickedCategory] = useState("");
  const chooseCategory = (e) => {
    console.log(
      e.currentTarget.parentElement.parentElement.parentElement.children[0]
        .innerText
    );
    setClickedCategory(
      e.currentTarget.parentElement.parentElement.parentElement.children[0]
        .innerText
    );
  };

  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Redirect to="/" />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/category" exact>
              <Category chooseCategory={chooseCategory} />
            </Route>
            <Route path="/category/web-development" children={<Category />}>
              <BuildCV
                clickedCategory={clickedCategory}
                title="Web development"
              />
            </Route>
            <Route path="/category/data-science" children={<Category />}>
              <BuildCV clickedCategory={clickedCategory} title="Data Science" />
            </Route>
            <Route path="/category/digital-marketing" children={<Category />}>
              <BuildCV
                clickedCategory={clickedCategory}
                title="Digital Marketing"
              />
            </Route>
            <Route path="/category/design" children={<Category />}>
              <BuildCV clickedCategory={clickedCategory} title="Design" />
            </Route>
            <Route path="/popup" exact>
              <Popup />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
