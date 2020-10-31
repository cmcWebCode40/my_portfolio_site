import React from 'react';

const SignIn = () => {
  return (
    <div className="col col-lg-auto mx-auto hidden" id="custom_form-section-sign-in">
      <div className="card shadow p-3 mb-5 bg-white rounded custom_card" style={{ maxWidth: '25rem' }}>
        <div className="card-body custom_card-body">
          <h5 className="card-title custom_card-title">Sign in</h5>
          <form>
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
                <input type="password" name="password" className="form-control" id="password" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary custom_form-button">Sign in</button>
          </form>
        </div>
        <div className="card-footer custom_card-footer mx-n3 mb-n3">
          Don&apos;t have an account?
          {' '}
          <a href="##" id="sign_in" onClick="loginHidden()">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
