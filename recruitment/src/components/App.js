import React from 'react';
import history from '../history';
import { useSelector } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import JobApplying from './JobApplying';
import JobLists from './JobLists';
import ChangePassword from './ChangePassword';
import ManageJobs from './ManageJobs';
import AddJobs from './AddJobs';
import PrivateRouter from './PrivateRouter';
import ApplicationList from './ApplicationList';

const App = () => {
  const { isLogin } = useSelector((state) => state.login);
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/jobs" component={JobLists} />
        <Route path="/apply-job/:title" component={JobApplying} />
        <Route path="/login" exact component={Login} />

        <PrivateRouter
          Component={Dashboard}
          path="/Dashboard"
          exact
          isLogin={isLogin}
        />
        <PrivateRouter
          Component={ManageJobs}
          path="/manage-jobs"
          exact
          isLogin={isLogin}
        />
        <PrivateRouter
          Component={AddJobs}
          path="/add-jobs"
          exact
          isLogin={isLogin}
        />
        <PrivateRouter
          Component={AddJobs}
          path="/edit-jobs/:id"
          exact
          isLogin={isLogin}
        />
        <PrivateRouter
          Component={ApplicationList}
          path="/application-list"
          exact
          isLogin={isLogin}
        />
        <PrivateRouter
          Component={ChangePassword}
          path="/change-password"
          exact
          isLogin={isLogin}
        />
      </Router>
    </div>
  );
};

export default App;
