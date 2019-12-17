import React, { Fragment } from "react";
import { Header } from "./Components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NotFound } from "Views/NotFound";
import { FaqView } from "Views/Faq";
import { Content } from "Components/MainContent";
import { Navbar } from "Components/Navbar";

export default () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />

        <Content>
          <Navbar />

          <div style={{ marginTop: "3rem" }}>
            <Switch>
              <Route exact path="/" component={NotFound} />
              <Route exact path="/faq" component={FaqView} />
              <Route exact path="/locais" component={NotFound} />
              <Route exact path="/categoria" component={NotFound} />
            </Switch>
          </div>
        </Content>
      </Fragment>
    </BrowserRouter>
  );
};
