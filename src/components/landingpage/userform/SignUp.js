import React from 'react';

const SignUp = () => {
  return (
    <div className="col col-lg-auto mx-auto" id="custom_form-section-sign-up">
      <div className="card shadow p-3 mb-5 bg-white rounded custom_card" style={{ maxWidth: '25rem' }}>
        <div className="card-body custom_card-body">
          <h5 className="card-title custom_card-title">Create Account</h5>
          <form>
            <div className="form-group custom_form-group">
              <label htmlFor="name">
                Full Name
                {' '}
                <input type="text" className="form-control" id="name" />
              </label>

            </div>
            <div className="form-group custom_form-group">
              <label htmlFor="email">
                Email
                {' '}
                <input type="email" className="form-control" id="email" />
              </label>

            </div>
            <div className="form-group custom_form-group">
              <label htmlFor="password">
                Password
                {' '}
                <input type="password" className="form-control" id="password" />
              </label>

            </div>
            <div className="form-group custom_form-group">
              <label htmlFor="confirmPassword">
                Confirm Password
                {' '}
                <input type="password" className="form-control" id="confirmPassword" />
              </label>

            </div>
            <div className="mx-auto custom_signup-terms"><small>By Clicking Sign up, you accept terms & Conditions</small></div>
            <button type="submit" className="btn btn-primary custom_form-button">Create Account</button>
          </form>
        </div>
        <div className="card-footer custom_card-footer mx-n3 mb-n3">
          Already have an account?
          {' '}
          <a href="##" id="sign_in" onClick="signUpHidden()">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
