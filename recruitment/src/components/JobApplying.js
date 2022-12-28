// this page is for applying listed job

import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { postingApplication } from '../action/index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

// condition for phone number validation
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// validating
const SignupSchema = Yup.object().shape({
  // validating name
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('name is Required'),

  // validating phone no
  phnNo: Yup.string()
    .required('Enter the phone Number')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'phone no always be 10 digits')
    .max(10, 'invalid phone no'),

  // validating email
  eMail: Yup.string().email('Invalid email').required('Enter Your E-mail'),

  //validating file upload
  resume: Yup.array().min(1, 'select at least 1 file'),
});

const JobApplying = () => {
  const dispatch = useDispatch();

  const [resume, setResume] = useState([]);
  //   console.log(resume);

  const [appliedPost, setAppliedPost] = useState('');
  const params = useParams();
  useEffect(() => {
    setAppliedPost(params);
  }, [params]);
  // console.log(appliedPost);

  return (
    <div className="container h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="card-body p-md-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Apply For This Post
              </p>
              <Formik
                initialValues={{
                  // initial values
                  firstName: '',
                  phnNo: '',
                  eMail: '',
                }}
                // validation
                validationSchema={SignupSchema}
                // on submit values
                onSubmit={(values, { resetForm }) => {
                  resetForm({ values: '' });
                  // adding applicant details to database

                  dispatch(
                    postingApplication({
                      name: values.firstName,
                      phone: values.phnNo,
                      email: values.eMail,
                      applied_post: appliedPost.title,
                      resume: resume,
                    })
                  );
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* input name field */}
                    <div className="form-group mb-4">
                      <label htmlFor="name" style={{ fontWeight: '700' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="Enter Your Name"
                      />

                      {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                      ) : null}
                    </div>

                    {/* input phone number field */}
                    <div className="form-group mb-4">
                      <label htmlFor="phn" style={{ fontWeight: '700' }}>
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phn"
                        name="phnNo"
                        placeholder="Enter Your Phone No"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phnNo}
                      />

                      {errors.phnNo && touched.phnNo ? (
                        <div>{errors.phnNo}</div>
                      ) : null}
                    </div>

                    {/* email field */}
                    <div className="form-group mb-4">
                      <label htmlFor="email" style={{ fontWeight: '700' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="eMail"
                        placeholder="Enter Your E-mail Id"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.eMail}
                      />

                      {errors.eMail && touched.eMail ? (
                        <div>{errors.eMail}</div>
                      ) : null}
                    </div>

                    {/* resume upload field */}
                    <div className="form-group mb-4">
                      <label htmlFor="email" style={{ fontWeight: '700' }}>
                        Resume
                      </label>
                      <FileBase64
                        multiple={true}
                        onDone={(files) => setResume(files[0].base64)}
                      />
                      {errors.resume && touched.resume ? (
                        <div>{errors.resume}</div>
                      ) : null}
                    </div>

                    {/* submit button */}
                    <button
                      type="submit"
                      className="btn btn btn-dark mb-2 mx-3"
                    >
                      Submit
                    </button>
                    <Link className="btn btn-danger mb-2 " to="/jobs">
                      cancel
                    </Link>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplying;
