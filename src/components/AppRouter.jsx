import React from "react";
import { Switch, Route } from "react-router-dom";
import AddBook from "../pages/AddBook";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/home">
        <MainPage />
      </Route>
      <Route path="/add">
        <AddBook />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  );
};

export default AppRouter;
