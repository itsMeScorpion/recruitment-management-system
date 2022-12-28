//header

import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link
              className="navbar-brand mt-2 mt-lg-0 font-weight-bold"
              to={'/'}
              style={{ fontWeight: '700' }}
            >
              JOB PORTAL
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark " to={'/jobs'}>
                  JOBS
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <span className="text-reset me-3">
              <i className="fas fa-bell"></i>
            </span>
          </div>
          <Link
            className="btn btn-primary text-decoration-none h4 button"
            to={'/login'}
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
