import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../action/index';

const LoginSchema = Yup.object().shape({
  // username validation
  uname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('username is Required'),

  // password validation
  pass: Yup.string()
    .required('Enter the password')
    .min(5, 'password might be minimum 5 character')
    .max(20, 'too long'),
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <section className="background">
      <div
        className="container-fluid h-custom "
        style={{ marginBottom: '150px' }}
      >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h1 className="align-center">Admin Login Page</h1>
            <div className="mt-4">
              <Formik
                initialValues={{
                  // initial values
                  uname: '',
                  pass: '',
                }}
                // validation
                validationSchema={LoginSchema}
                // on submit values
                onSubmit={(values, { resetForm }) => {
                  resetForm({ values: '' });
                  dispatch(adminLogin(values));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                      <label htmlFor="uname" style={{ fontWeight: '700' }}>
                        Enter username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="uname"
                        name="uname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.uname}
                        placeholder="Enter Your username"
                      />

                      {errors.uname && touched.uname ? (
                        <div className="text-danger">{errors.uname}</div>
                      ) : null}
                    </div>

                    <div className="form-group mb-4">
                      <label htmlFor="pass" style={{ fontWeight: '700' }}>
                        Enter Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pass"
                        name="pass"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pass}
                        placeholder="Enter Your passWord"
                      />

                      {errors.pass && touched.pass ? (
                        <div className="text-danger">{errors.pass}</div>
                      ) : null}
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>{' '}
                      <Link to="/" className="btn btn-secondary">
                        Back
                      </Link>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
