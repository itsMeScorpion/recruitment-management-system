// admin page

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listJobs, fetchApplications } from '../action/index';
import AdminPageNav from './AdminPageNav';

const Dashboard = () => {
  const dispatch = useDispatch();

  // counters

  const { jobData } = useSelector((state) => state.jobs);
  const { data } = useSelector((state) => state.applications);
  useEffect(() => {
    dispatch(listJobs());
    dispatch(fetchApplications());
  }, [jobData.length]);

  //   jsx
  return (
    <div>
      <AdminPageNav />

      <div className="p-1 my-container active-cont d-flex">
        <div className="card mt-5" style={{ marginLeft: '4%', padding: '2%' }}>
          <div className="card-img-top" style={{ marginLeft: '10%' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="currentColor"
              className="bi bi-person-rolodex"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
            </svg>
          </div>
          <div className="card-body">
            <p className="card-text">Total Job vacancies</p>

            <h4 className="my-1 text-info text-dark ">{jobData.length}</h4>
          </div>
        </div>
        <div className="card mt-5" style={{ marginLeft: '5%', padding: '2%' }}>
          <div className="card-img-top" style={{ marginLeft: '15%' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="currentColor"
              class="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
            </svg>
          </div>
          <div className="card-body">
            <p className="card-text">Number Of Applications</p>

            <h4 className="my-1 text-info text-dark ">{data.length}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
