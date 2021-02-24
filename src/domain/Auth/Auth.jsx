import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { withRouter } from 'react-router';
import { Alert } from 'react-bootstrap';
import usePassword from '../../hooks/usePassword';

const Auth = function Auth({ history }) {
  const password = usePassword();
  const [error, setError] = useState(false);

  return (
    <section className="min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center pt-6">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="text-center mb-4">
              <h1 className="mb-1">This material is private</h1>
              <span>Enter password to gain access</span>
              { error && <Alert variant="danger" className="mt-3">The password you have entered is incorrect. Please try again.</Alert>}
            </div>
            <Formik
              initialValues={{
                password: '',
              }}
              onSubmit={(values, { resetForm }) => {
                setError(false);
                resetForm();
                if (values.password === password) {
                  localStorage.setItem('authentication', values.password);
                  history.push('/media');
                } else {
                  setError(true);
                }
              }}
            >
              <Form>
                <div className="form-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button className="btn-block btn btn-primary" type="submit">Submit</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Auth);
