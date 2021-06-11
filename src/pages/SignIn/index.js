import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  changeLoginActionCreator,
  changePasswordActionCreator,
  onSignInActionCreator,
} from '../../actions/SignInActions';

import { ROUTES } from '../../const';

import './style.css';

const SignInPage = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.signIn.phone);
  const password = useSelector((state) => state.signIn.password);
  const user = useSelector((state) => state.signIn.user);
  const error = useSelector((state) => state.signIn.error);

  const onChangeLogin = useCallback(
    (event) => {
      dispatch(changeLoginActionCreator(event.target.value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (event) => {
      dispatch(changePasswordActionCreator(event.target.value));
    },
    [dispatch]
  );

  const onSignIn = useCallback(() => {
    dispatch(onSignInActionCreator(phone, password));
  }, [dispatch, phone, password]);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='page'>
      <div className='page-sign-in'>
        <form onSubmit={submitHandler}>
          <div className='form-inner'>
            <h3>Sign In</h3>
            <div className='error-text'>{error}</div>
            <div className='form-group'>
              <label htmlFor='login'>Login</label>
              <input type='text' onChange={onChangeLogin} value={phone} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                onChange={onChangePassword}
                value={password}
              />
            </div>
            <button onClick={onSignIn}>Sign In</button>
          </div>
        </form>
      </div>
      {user && <Redirect to={ROUTES.MAIN} />}
    </div>
  );
};

export { SignInPage };
