import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authenticationReducer(state = initialState.authentication, action) {
  switch (action.type) {
    case types.AUTHENTICATE_START:
      return action.authentication;

    case types.AUTHENTICATE_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        name: action.auth.name,
        token: '',
        role: action.auth.role
      });

    case types.LOG_OUT:
      return Object.assign({}, state, {
        loggedIn: false,
        token: '',
        role: '',
        name: ''
      });


    case types.SET_REDIRECT_URL:
      return Object.assign({}, state, {redirectUrl: action.url});

    default:
      return state;
  }
}
