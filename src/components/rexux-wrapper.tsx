'use client'
import React from 'react';
import { Provider } from 'react-redux'; 
import store from '../app/store';

/**
 * A wrapper for <Route> that wraps component in a redux store
 * @param param0 
 * @returns React.ElementType<ReduxRouteProps>
 * @example
 */
interface ReduxWrapper {
  children: React.ReactNode; // Add the children property
}

const ReduxWrapper: React.FC<ReduxWrapper> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);
export default ReduxWrapper;