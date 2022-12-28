import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = (props) => {
  return (
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">Company:- {props.company}</p>
      <p class="card-text">Salary:- {props.salary}</p>
      <p class="card-text">Work Mode:- {props.mode}</p>
      <div className="job-right my-4 flex-shrink-0">
        <Link
          to={`/apply-job/${props.title}`}
          className="btn btn-primary button"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
