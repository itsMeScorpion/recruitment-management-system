// job list page admin side

import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminPageNav from './AdminPageNav';
import { listJobs } from '../action/index';

const ManageJobs = () => {
  //list of data posted by admin using react data table component

  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Company Name',
      selector: (row) => row.company,
    },
    {
      name: 'Technologies',
      selector: (row) => row.technologies,
    },
    {
      name: 'Skills',
      selector: (row) => row.skills,
    },
    {
      name: 'Benefits',
      selector: (row) => row.benefits,
    },
    {
      name: 'Experience Required',
      selector: (row) => row.experience,
    },
    {
      name: 'Salary Range',
      selector: (row) => row.salary,
    },
    {
      name: 'Mode of work',
      selector: (row) => row.mode,
    },
    {
      name: 'action',
      selector: (row) => (
        <Link
          to={`/edit-jobs/${row.id}`}
          type="submit"
          className="btn btn-success btn-sm"
        >
          Edit
        </Link>
      ),
    },
  ];

  // fetching reducer value
  const { jobData } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listJobs());
  }, []);

  // jsx part
  return (
    <div className="main_container">
      <AdminPageNav />
      <div className="container mt-5">
        <Link to={'/add-jobs'} type="button" className="btn btn-primary">
          Add Job
        </Link>

        <div className="mt-3">
          <DataTable columns={columns} data={jobData} pagination/>
        </div>
        <Link to={'/Dashboard'} className="btn btn-secondary mt-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ManageJobs;
