//job list page

import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listJobs } from '../action/index';
import JobCard from './JobCard';

const JobLists = () => {
  const dispatch = useDispatch();
  const { jobData } = useSelector((state) => state.jobs);

  const [searchWord, setSearchWord] = useState('');

  const [onClick, setOnClick] = useState(false);

  // fetching all jobs from database
  useEffect(() => {
    dispatch(listJobs());
  }, [jobData.length]);

  let data = jobData;

  if (onClick) {
    data = data.filter(
      (item) =>
        item.title.includes(searchWord) ||
        item.company.includes(searchWord) ||
        item.technologies.includes(searchWord)
    );
  }

  const onSearch = (e) => {
    e.preventDefault();
    setOnClick(true);
  };

  return (
    <div className="mt-2 mb-2">
      <Header />
      <div className="d-flex flex-row m-3" style={{ justifyContent: 'center' }}>
        <form className="d-flex" onSubmit={onSearch}>
          {/* search box */}
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search For Jobs"
            value={searchWord}
            aria-label="Search"
            onChange={(e) => {
              setOnClick(false);
              setSearchWord(e.target.value);
            }}
          />
          <button className="btn btn-info button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div
        className="d-flex"
        style={{ justifyContent: 'space-evenly', marginTop: '5%' }}
      >
        {/* job cards */}
        {data.length === 0
          ? null
          : data.map((jobs, index) => {
              return (
                <div className="card" key={index}>
                  <JobCard
                    title={jobs.title}
                    company={jobs.company}
                    salary={jobs.salary}
                    mode={jobs.mode}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default JobLists;
