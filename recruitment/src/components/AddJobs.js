//add job by admin

import React, { useEffect } from 'react';
import { Formik, useFormik } from 'formik';
import { postingJob, updateJob, getJobDetails } from '../action/index';
import { Link, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

const AddJobs = () => {
  //  fetching id
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(getJobDetails(id));
    }
  }, []);

  // fetching the reducer values
  const { getjobDetails } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    setFieldValue,
    errors,
    resetForm,
  } = useFormik({
    // validation
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('title is Required'),

      company: Yup.string()
        .required('Enter the company name')
        .min(2, 'Too Short!')
        .max(50, 'invalid '),

      technologies: Yup.string()
        .required('Enter the skills')
        .min(2, 'Too Short!')
        .max(50, 'invalid '),

      skills: Yup.string()
        .required('Enter the skills')
        .min(2, 'Too Short!')
        .max(50, 'invalid '),

      benefits: Yup.string()
        .required('Enter the benefits')
        .min(2, 'Too Short!')
        .max(50, 'invalid '),

      experience: Yup.string()
        .required('Enter the experience')
        .min(2, 'Too Short!')
        .max(50, 'invalid '),

      salary: Yup.string()
        .required('Enter the salary')
        .min(2, 'Too Short!')
        .max(50, 'invalid '),

      mode: Yup.string()
        .required('Enter the mode')
        .min(2, 'Too Short!')
        .max(50, 'invalid '),
    }),
    // initial values
    initialValues: {
      title: '',
      company: '',
      technologies: '',
      skills: '',
      benefits: '',
      experience: '',
      salary: '',
      mode: '',
    },

    onSubmit: (values, { resetForm }) => {
      // update job and add job actions
      if (id) {
        dispatch(updateJob(id, values));
      } else dispatch(postingJob(values));
    },
  });

  // setting field value of selected edit job
  useEffect(() => {
    if (getjobDetails) {
      setFieldValue('title', getjobDetails.title);
      setFieldValue('company', getjobDetails.company);
      setFieldValue('technologies', getjobDetails.technologies);
      setFieldValue('skills', getjobDetails.skills);
      setFieldValue('benefits', getjobDetails.benefits);
      setFieldValue('experience', getjobDetails.experience);
      setFieldValue('salary', getjobDetails.salary);
      setFieldValue('mode', getjobDetails.mode);
    }
  }, [getjobDetails]);

  useEffect(() => {
    resetForm({
      title: '',
      company: '',
      technologies: '',
      skills: '',
      benefits: '',
      experience: '',
      salary: '',
      mode: '',
    });
  }, []);

  return (
    <div className="m-5">
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit}>
        {/* input title */}
        <div className="form-group w-25 mb-4">
          <label htmlFor="title">Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {touched.title && errors.title ? (
            <div className="text-danger">{errors.title}</div>
          ) : null}
        </div>
        {/* Company */}
        <div className="form-group w-25 mb-4">
          <label htmlFor="company">Company Name:</label>
          <input
            className="form-control"
            type="text"
            name="company"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.company}
          />

          {errors.company && touched.company ? (
            <div className="text-danger">{errors.company}</div>
          ) : null}
        </div>
        {/* Technologies */}
        <div className="form-group w-50 mb-4">
          <label htmlFor="technologies">Technologies:</label>
          <input
            className="form-control"
            type="text"
            name="technologies"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.technologies}
          />

          {touched.technologies && errors.technologies ? (
            <div className="text-danger">{errors.technologies}</div>
          ) : null}
        </div>
        {/* skills */}
        <div className="form-group w-50 mb-4">
          <label htmlFor="skills">Skills:</label>
          <input
            className="form-control"
            type="text"
            name="skills"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.skills}
          />

          {touched.skills && errors.skills ? (
            <div className="text-danger">{errors.skills}</div>
          ) : null}
        </div>
        {/* Benefits */}
        <div className="form-group w-50 mb-4">
          <label htmlFor="benefits">Benefits</label>
          <textarea
            className="form-control"
            name="benefits"
            rows="2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.benefits}
          />

          {touched.benefits && errors.benefits ? (
            <div className="text-danger">{errors.benefits}</div>
          ) : null}
        </div>
        {/* experience */}
        <div className="form-group w-25 mb-4">
          <label htmlFor="experience">experience</label>
          <input
            className="form-control"
            name="experience"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.experience}
          />

          {touched.experience && errors.experience ? (
            <div className="text-danger">{errors.experience}</div>
          ) : null}
        </div>
        {/* salary */}
        <div className="form-group w-25 mb-4">
          <label htmlFor="salary">salary:</label>
          <input
            className="form-control"
            type="number"
            name="salary"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.salary}
          />

          {touched.salary && errors.salary ? (
            <div className="text-danger">{errors.salary}</div>
          ) : null}
        </div>
        {/* mode of work */}
        <div className="form-group w-25 mb-4">
          <label htmlFor="mode">Mode of work:</label>
          <input
            className="form-control"
            type="text"
            name="mode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mode}
          />

          {touched.mode && errors.mode ? (
            <div className="text-danger">{errors.mode}</div>
          ) : null}
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>{' '}
        <Link className="btn btn-secondary mt-4" to="/manage-jobs">
          cancel
        </Link>
      </form>
      {/* back to admin page button */}
    </div>
  );
};
export default AddJobs;
