import React from 'react';
import '../index.css';

const ApplicationListRow = (props) => {
  // setting application status
  const status = ['shortlisted', 'rejected', 'pending'];
  const random = Math.floor(Math.random() * status.length);

  return (
    <tr key={props.id}>
      <td>
        <p className="applicant_name"> {props.name}</p>
      </td>
      <td>{props.email}</td>
      <td>{props.applied_post}</td>
      <td>{props.phone}</td>
      <td>
        <a href={props.resume} className="btn btn-success" download>
          Download Resume
          <span className="fa-solid fa-file-arrow-down "></span>
        </a>
      </td>
    </tr>
  );
};

export default ApplicationListRow;
