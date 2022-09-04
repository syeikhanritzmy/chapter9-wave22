import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import RegisterInput from '../../components/inputs/registerInput';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../utils/firebase';
import { ref, set } from 'firebase/database';
import { uid } from 'uid';
const registerState = {
  username: '',
  password: '',
  email: '',
  bio: '',
  score: 0,
};

export default function Register() {
  const [user, setUser] = useState(registerState);
  const { username, email, password, score, bio } = user;
  const navigate = useNavigate();
  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = async () => {
    if ((username, password, email === '')) {
      return alert('please fill out the form');
    } else {
      if (password.length < 6) {
        alert('please input password 6 character');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        await writeDatabase();
        await navigate('/homepage');
        alert('create user');
        auth.onAuthStateChanged((user) => {
          console.log(user);
        });
      }
    }
  };

  auth.onAuthStateChanged((user) => {
    console.log(user);
  });

  const writeDatabase = () => {
    const uuid = uid();
    set(
      ref(db, `/users/${auth.currentUser.uid}`, {
        uuid,
      }),
      {
        username,
        password,
        email,
        score,
        bio,
      }
    );
  };

  const registerValidation = Yup.object({
    username: Yup.string().required('Username is required').min(5),
    email: Yup.string()
      .required('Email address is required.')
      .email('Must be a valid email.')
      .max(50),
    password: Yup.string().required('password is required'),
  });
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <Formik
                        enableReinitialize
                        initialValues={{
                          username,
                          password,
                          email,
                          score,
                          bio,
                        }}
                        validationSchema={registerValidation}
                      >
                        {(formik) => (
                          <Form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw" />
                              <div className="form-outline flex-fill mb-0">
                                <RegisterInput
                                  label={'Username'}
                                  placeholder="input username ..."
                                  type="string"
                                  name="username"
                                  onChange={handleRegisterInput}
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                              <div className="form-outline flex-fill mb-0">
                                <RegisterInput
                                  label={'email'}
                                  placeholder="input email ..."
                                  type="email"
                                  name="email"
                                  onChange={handleRegisterInput}
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw" />
                              <div className="form-outline flex-fill mb-0">
                                <RegisterInput
                                  label={'Password'}
                                  placeholder="input password ..."
                                  type="password"
                                  name="password"
                                  onChange={handleRegisterInput}
                                />
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="button"
                                className="btn btn-primary btn-lg"
                                onClick={handleRegister}
                              >
                                Register
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
