// change password

import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import AdminPageNav from './AdminPageNav';
import { passwordUpdate } from '../action/index';
import * as Yup from 'yup';
import services from '../services';

const ChangePassword = () => {
  const dispatch = useDispatch();

  // validating password fields
  const SignupSchema = Yup.object().shape({
    currentPass: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('enter the current password'),

    newPass: Yup.string()
      .required('Password is required')
      // .matches([Yup.ref('currentPass')], 'this is previous one, plz enter new')
      .min(5, 'Your password is too short.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmPass: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('newPass'), null], 'Passwords must match'),
  });

  return (
    <div>
      <AdminPageNav />
      <div className="p-1 my-container active-cont mt-5">
        <h2>Change Password</h2>
        <Formik
          initialValues={{
            // initial values
            currentPass: '',
            newPass: '',
            confirmPass: '',
          }}
          //validation schema
          validationSchema={SignupSchema}
          //updating password on button submit
          onSubmit={(values, { resetForm }) => {
            resetForm({ values: '' });
            if (values.confirmPass !== values.currentPass) {
              dispatch(passwordUpdate(values));
            } else alert('Try Another Password');
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
          }) => (
            <Form>
              <div className="form-group w-25 mb-3">
                <label htmlFor="currentPass">Current Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="currentPass"
                  name="currentPass"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.currentPass}
                />
                {errors.currentPass && touched.currentPass ? (
                  <div className="text-danger">{errors.currentPass}</div>
                ) : null}
              </div>

              <div className="form-group w-25 mb-3">
                <label htmlFor="newPass">Your New Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="newPass"
                  id="newPass"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.newPass}
                />

                {errors.newPass && touched.newPass ? (
                  <div className="text-danger">{errors.newPass}</div>
                ) : null}
              </div>

              <div className="form-group w-25 mb-3">
                <label htmlFor="confirmPass">Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="confirmPass"
                  name="confirmPass"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPass}
                />
                {errors.confirmPass && touched.confirmPass ? (
                  <div className="text-danger">{errors.confirmPass}</div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
