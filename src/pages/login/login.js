import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import LoginInput from '../../components/inputs/loginInput';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

const loginState = {
  email: '',
  password: '',
};

export default function Login() {
  const [login, setLogin] = useState(loginState);
  const { email, password } = login;
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/homepage');
      }
    });
  }, []);

  const handleOnchangeInput = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Email address is required.')
      .email('Must be a valid email.')
      .max(50),
    password: Yup.string().required('password is required'),
  });

  const AuthLogin = async () => {
    try {
      if (!login) {
        await Toast.fire({
          icon: 'success',
          title: 'signed in successfully',
        });
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(await user.user.getIdToken());
      } else {
        await Toast.fire({
          icon: 'warning',
          title: 'please fill in the column first',
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                      onClick={AuthLogin}
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
