import callApi from '../../util/apiCaller';

import Notifications from 'react-notification-system-redux';

// Export Constants
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';

export const REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';

export const FETCH_USER_PROFILE_SUCCEEDED = 'FETCH_USER_PROFILE_SUCCEEDED';
export const FETCH_USER_PROFILE_FAILED = 'FETCH_USER_PROFILE_FAILED';

export const SET_REDIRECT_URL = 'SET_REDIRECT_URL';

import { browserHistory } from 'react-router';

// Export Actions
export function setLoginState(state) {
  return {
    type: SET_LOGIN_STATE,
    state
  }

}

export function registerSucceeded(user) {
  return {
    type: REGISTER_SUCCEEDED,
    user: user
  };
}

export function registerFailed(err) {
  return {
    type: REGISTER_FAILED,
    err: err
  }
}

export function loginRequested() {
  return {
    type: LOGIN_REQUESTED
  }
}

export function loginSucceeded(user) {
  return {
    type: LOGIN_SUCCEEDED,
    user: user
  };
}

export function loginFailed(err) {
  return {
    type: LOGIN_FAILED,
    err: err
  }
}

export function logoutSucceeded() {
  browserHistory.push('/');
  return {
    type: LOGOUT_SUCCEEDED,
  };
}

export function fetchUserProfileSucceeded(user) {
  return {
    type: FETCH_USER_PROFILE_SUCCEEDED,
    user: user
  };
}

export function fetchUserProfileFailed(err) {
  return {
    type: FETCH_USER_PROFILE_FAILED,
    err: err
  };
}

export function setRedirectUrl(url) {
  return {
    type: SET_REDIRECT_URL,
    url: url
  }
}

export function checkLoginState() {
  return (dispatch) => {
    callApi('auth/profile', 'get')
    .then(res => dispatch(setLoginState('LOGGED')),
          err => dispatch(fetchUserProfileFailed('NOT_LOGGED'))
    );
  }
}

export function registerRequest(user) {
  return (dispatch) => {
    return callApi('auth/register', 'post', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    }).then(res => {
      dispatch(registerSucceeded(res.user));
      dispatch(loginRequest(user));
      /*dispatch(Notifications.success({
        title: 'Welcome',
        message: `You created account. Enjoy yourself.`,
        position: 'br',
        autoDismiss: 3
      })*/
    }, err => {
      dispatch(registerFailed(err));
      dispatch(Notifications.error({
        title: 'SignUp Failure',
        message: err.message,
        position: 'br',
        autoDismiss: 3
      }));
    });

  };
}

function handleLogin(dispatch, promise) {
  promise.then(res => {
    dispatch(loginSucceeded(res.user));
    dispatch(Notifications.success({
      title: 'Welcome',
      message: `Welcome, ${res.user.name.givenName} ${res.user.name.familyName}`,
      position: 'br',
      autoDismiss: 3
    }));
  }, err => {
    dispatch(loginFailed(err));
    dispatch(Notifications.error({
      title: 'Login Failure',
      message: 'Invalid crendential ! Please try again.',
      position: 'br',
      autoDismiss: 3
    }));
  });
}

export function loginRequest(user) {
  return (dispatch) => {
    dispatch(loginRequested());
    handleLogin(dispatch, callApi('auth/login', 'post', {
      email: user.email,
      password: user.password
    }));

  };
}

export function socialLoginRequest(provider, user) {
  return (dispatch) => {
    dispatch(loginRequested());

    handleLogin(dispatch, callApi(`auth/${provider}`, 'post', {
      [provider]: user
    }));

  };
}

export function logoutRequested() {
  return (dispatch) => {
    callApi('auth/logout', 'get')
    .then(res => {
      dispatch(logoutSucceeded());
      dispatch(Notifications.success({
        title: 'Logout',
        message: `Bye`,
        position: 'br',
        autoDismiss: 3
      }));
    }, err => {

    });

  };
}

export function fetchUserProfileRequested() {
  return (dispatch) => {
    callApi('auth/profile', 'get')
    .then(res => dispatch(fetchUserProfileSucceeded(res.user)),
          err => dispatch(fetchUserProfileFailed(err))
    );
  }
}
