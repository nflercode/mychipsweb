import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from '../store';

interface ReduxRouteProps {
    element: React.ElementType<any>;
    path: string;
  }

/**
 * A wrapper for <Route> that wraps component in a redux store
 * @param param0 
 * @returns React.ElementType<ReduxRouteProps>
 * @example
 * <ReduxRoute path="/create-table" component={ReduxComponent} />
 */
export const ReduxRoute: React.ElementType<ReduxRouteProps> = ({ element: Element, path }) => (
  <Route path={path}>
    <Provider store={store}>
      <Element />
    </Provider>
  </Route>
);