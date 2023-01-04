//applications

import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchApplications } from '../action/index';
import { CSVLink } from 'react-csv';
import AdminPageNav from './AdminPageNav';
import ApplicationListRow from './ApplicationListRow';

const ApplicationList = () => {
  const { data } = useSelector((state) => state.applications);

  const dispatch = useDispatch();
  // fetching all application details from db
  useEffect(() => {
    dispatch(fetchApplications());
  }, []);

  // csv setting
  const headers = [
    { label: ' Name', key: 'name' },
    { label: 'Email Id', key: 'email' },
    { label: 'Applied Post ', key: 'applied_Post' },
    { label: 'Phone', key: 'phone' },
  ];

  // set data for excel download
  const ApplicationStatus = {
    data: data,
    headers: headers,
    filename: 'Applications.csv',
  };

  return (
    <div className="wallpaper text-white">
      <AdminPageNav />
      <div className="container">
        <div className="m-2 text-center">
          <h2 className="">APPLICATIONS</h2>
          <CSVLink
            filename={'Applications.csv'}
            data={data}
            className="btn btn-primary m-2"
          >
            Export List
          </CSVLink>
        </div>

        <div className="m-3 ">
          <div className="table-responsive">
            <table
              className="table user-list"
             
            >
              <thead  >
                <tr className="text-white">
                  <th className="text-center">
                    <span> Applicant Name</span>
                  </th>
                  <th className="text-center">
                    <span>Email Id</span>
                  </th>
                  <th className="text-center">
                    <span>Applied Post</span>
                  </th>
                  <th className="text-center">
                    <span>Phone No</span>
                  </th>
                  <th className="text-center">
                    {' '}
                    <span>Resume</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0
                  ? null
                  : data.map((application, index) => {
                      return (
                        <ApplicationListRow
                          id={application.id}
                          name={application.name}
                          email={application.email}
                          applied_post={application.applied_post}
                          phone={application.phone}
                          resume={application.resume}
                        />
                      );
                    })}
              </tbody>
            </table>
          </div>
          <Link to={'/Dashboard'} className="btn btn-secondary mt-3">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
