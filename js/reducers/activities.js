/* @flow */
import {Map} from 'immutable'

import {
  GOOGLE_FIT_AUTHORIZATION_FAILURE,
  GOOGLE_FIT_AUTHORIZATION_SUCCESS
} from '../constants/actionTypes'

const Activities = Map()

export default function user(state = new Activities(), action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return state.set('attemptingLogin', true)
    case 'LOGIN_SUCCESS':
      return state
        .set('attemptingLogin', false)
        .set('failedLoginAttempts', 0)
        .set('isLoggedIn', true)
        .set('token', action.token)
    case 'LOGIN_FAILURE':
      return state
        .set('attemptingLogin', false)
        .set('failedLoginAttempts', state.get('failedLoginAttempts') + 1)
    case 'FETCH_PROFILE_REQUEST':
      return state
        .set('isFetchingProfile', true)
        .set('errorFetchingProfile', false)
    case 'FETCH_PROFILE_SUCCESS':
      return state
        .set('isFetchingProfile', false)
        .set('errorFetchingProfile', false)
        .set('id', action.profile.id)
        .set('firstName', action.profile.firstName)
        .set('lastName', action.profile.lastName)
        .set('email', action.profile.email)
        .set('avatar', action.profile.avatar)
        .set('country', action.profile.country)
        .set('city', action.profile.city)
        .set('phone', action.profile.phone)
    case 'FETCH_PROFILE_FAILURE':
      return state
        .set('isFetchingProfile', false)
        .set('errorFetchingProfile', true)
    case GOOGLE_FIT_AUTHORIZATION_SUCCESS:
      return state.set('googleFitAuthorized', true)
    case GOOGLE_FIT_AUTHORIZATION_FAILURE:
      return state.set('googleFitAuthorized', false)
    default:
      return state
  }
}
