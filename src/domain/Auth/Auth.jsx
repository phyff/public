import React from 'react';
import { Formik, Form, Field } from 'formik';
import { withRouter } from 'react-router';

const Auth = function Auth({ history }) {
  return (
    <section className="min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center pt-6">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="text-center mb-4">
              <h1 className="mb-1">This material is private</h1>
              <span>Enter password to gain access</span>
            </div>
            <Formik
              initialValues={{
                password: '',
              }}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                localStorage.setItem('authentication', values.password);
                history.push('/media');
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
