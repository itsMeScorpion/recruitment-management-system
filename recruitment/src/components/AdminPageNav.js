import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setlogout } from '../action';

const AdminPageNav = () => {
  const dispatch = useDispatch();

  // logout function
  const adminlogout = (e) => {
    e.preventDefault();
    dispatch(setlogout(false));
  };
  return (
    <div className=" container header">
      <div className="header">
        <h3>Recruitment Admin Page</h3>
      </div>

      <Link className="navIcon" to={'/Dashboard'}>
        Dashboard
      </Link>
      <Link className="navIcon" to={'/manage-jobs'}>
        Manage Jobs
      </Link>
      <Link className="navIcon" to={'/application-list'}>
        Applications
      </Link>
      <Link className="navIcon" to={'/change-password'}>
        Change Password
      </Link>
      <button
        className="btn btn-danger "
        style={{ height: '2%', marginTop: '1.5%' }}
        onClick={adminlogout}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminPageNav;
