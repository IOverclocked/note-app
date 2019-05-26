import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { routes } from 'routes';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Notes from 'views/Notes/Notes';
import Articles from 'views/Articles/Articles';
import Twitters from 'views/Twitters/Twitters';
import Details from 'views/Details/Details';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={Details} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={Details} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={Details} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

export default Root;
