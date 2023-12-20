import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { RouteProps } from 'react-router-dom';

import StartPage from '../pages/start-page';
import CreateTable from '../pages/create-table';
import JoinTable from '../pages/join-table';
import Table from '../pages/table';
import Article from '../pages/article';
import {ReduxRoute} from './redux-route';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <ReduxRoute path="/create-table" element={CreateTable} />
        <ReduxRoute path="/join-table" element={JoinTable} />
        <ReduxRoute path="/table/:tableId" element={Table} />
        <Route path="/article/:articleName" element={<Article />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
