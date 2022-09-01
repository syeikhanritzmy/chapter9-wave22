import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import LoginInput from '../../components/inputs/loginInput';

const loginState = {
  email: '',
  password: '',
};

export default function Login() {
  const [login, setLogin] = useState(loginState);
  const { email, password } = login;
  const navigate = useNavigate();
  const handleOnchangeInput = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  console.log(login);
  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Email address is required.')
      .email('Must be a valid email.')
      .max(50),
    password: Yup.string().required('password is required'),
  });
  return (
    <div className="container  ">
      <div className="row  justify-content-center   ">
        <Formik
          enableReinitialize
          initialValues={{
            email,
            password,
          }}
          validationSchema={loginValidation}
        >
          {(formik) => (
            <Form>
              <div className="d-flex m-5 justify-content-center ">
                <div className="col-md-6 border border-primary pb-5">
                  <h3 className="text-center pt-5 pb-4">Sign In</h3>
                  <LoginInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Your Email ... "
                    onChange={handleOnchangeInput}
                  />
                  <LoginInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password Here .."
                    onChange={handleOnchangeInput}
                  />
                  <div className="col-md-7 offset-md-3  d-flex justify-content-start pb-4">
                    <button
                      type="button"
                      className="btn btn-link "
                      onClick={() => {
                        navigate('/forget');
                      }}
                    >
                      Forget Password
                    </button>
                  </div>
                  <div className="col-md-7 offset-md-3 ">
                    <button
                      type="button"
                      className="btn btn-primary col-md-6 "
                      onClick={() => {
                        navigate('/homeGame');
                      }}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
