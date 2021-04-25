import React, { useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {
  CButton,
} from '@coreui/react'
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { firabaseInitialization, googleSignUp, handleSigninWithEmailAndPassword } from './LoginManager';
import { UserContext } from '../../../App';

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: '/admin/dashboard' } };

  firabaseInitialization();

  const onSubmit = data => {
    handleSigninWithEmailAndPassword(data)
      .then(res => {
        if (res === 'error') {
          console.log('error from login page');
        } else {
          console.log(res);
          setUser(res);
          history.replace(from);
        }

      })
  };

  const googleSignIn = () => {
    googleSignUp()
      .then(res => {
        setUser(res);
        history.replace(from);
      })
  }
  const facebookSignIn = () => {

  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col" md="8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  {
                    user.email
                  }
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input {...register("email", { required: true })} type="text" className="form-control" id="email" placeholder="Email" />
                      {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input {...register("password", { required: true })} type="password" className="form-control" id="password" placeholder="Password" />
                      {errors.password && <span className="text-danger">This field is required</span>}
                    </div>

                    <button className="btn btn-info">Login</button>
                  </form>

                  <div className="mt-3 login-form">
                    <h5 className="line"><span>OR</span></h5>
                    <button onClick={googleSignIn} className="w-100 btn btn-primary social-btn mb-2">
                      <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faGoogle} /><span>Continue With Google </span>
                    </button>

                  </div>

                </div>
              </div>
              <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <div className="card-body text-center">
                  <div>
                    <h2 className="text-white">Sign up</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
