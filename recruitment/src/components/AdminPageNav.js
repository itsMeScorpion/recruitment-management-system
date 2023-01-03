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
    <div className="header">
      <div className=" container header">
        <div>
          <h3 className="mt-4">Recruitment Admin Page</h3>
        </div>
        <Link className="navIcon nav-link" to={'/Dashboard'}>
          Dashboard
        </Link>
        <Link className="navIcon nav-link" to={'/manage-jobs'}>
          Manage Jobs
        </Link>
        <Link className="navIcon nav-link" to={'/application-list'}>
          Applications
        </Link>
        <Link className="navIcon nav-link" to={'/change-password'}>
          Change Password
        </Link>
        <button
          className="btn btn-danger"
          style={{ height: '40px', marginTop: '1.5%' }}
          onClick={adminlogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminPageNav;
