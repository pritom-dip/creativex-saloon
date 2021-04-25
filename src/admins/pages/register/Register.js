import React, { useContext } from 'react'
import CIcon from '@coreui/icons-react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { firabaseInitialization, googleSignUp, handleSignUpWithEmailAndPassword } from '../login/LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import '../login/Login.css';
import { UserContext } from '../../../App';


const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  firabaseInitialization();
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: '/admin/dashboard' } }

  const googleSignIn = () => {
    googleSignUp()
      .then(res => {
        setUser(res);
        history.replace(from);
      })
  }
  const facebookSignIn = () => {

  }

  const onSubmit = data => {
    handleSignUpWithEmailAndPassword(data)
      .then(res => {
        setUser(res);
        alert('account created successfully');
        history.replace(from);
      })
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-7 col-xl-6">
            <div className="card mx-4">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>

                  <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="username"><CIcon name="cil-user" /></span>
                    <input {...register("username", { required: true })} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="username" />
                    {errors.username && <span className="text-danger">This field is required</span>}
                  </div>

                  <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="email">@</span>
                    <input {...register("email", { required: true })} type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                  </div>

                  <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="password"><CIcon name="cil-lock-locked" /></span>
                    <input {...register("password", { required: true })} type="password" className="form-control" placeholder="Psssword" aria-label="Password" aria-describedby="Password" />
                    {errors.password && <span className="text-danger">This field is required</span>}
                  </div>

                  <div className="input-group flex-nowrap mb-2">
                    <span className="input-group-text" id="email"><CIcon name="cil-lock-locked" /></span>
                    <input {...register("c_password", { required: true })} type="password" className="form-control" placeholder="Retype Password" aria-label="Email" aria-describedby="email" />
                    {errors.c_password && <span className="text-danger">This field is required</span>}
                  </div>

                  <button className="btn btn-info w-100">Create Account</button>

                </form>
                <div className="mt-3 login-form">
                  <h5 className="line"><span>OR</span></h5>
                  <button onClick={googleSignIn} className="w-100 btn btn-primary social-btn mb-2">
                    <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faGoogle} /><span>Continue With Google </span>
                  </button>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
