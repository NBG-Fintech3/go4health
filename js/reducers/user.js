/* @flow */
import {Record} from 'immutable'

import type {Action} from '../actions/types'

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  avatar: string;
  country: string;
  city: string;
  phone: string;
  isLoggedIn: boolean;
  attemptingLogin: boolean;
  failedLoginAttempts: number;
  isFetchingProfile: boolean;
  errorFetchingProfile: boolean;
}

type State = Record<User>

const UserRecord = Record({
  id: '',
  firstName: 'Georgios',
  lastName: 'Rassias',
  email: 'grassias@gmail.com',
  token: '',
  avatar: 'https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png',
  country: '',
  city: '',
  phone: '',
  go4morePoints: 500,
  isLoggedIn: false,
  attemptingLogin: false,
  failedLoginAttempts: 0,
  isFetchingProfile: false,
  errorFetchingProfile: false
})

export default function user(state: State = new UserRecord(), action: Action) {
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
    default:
      return state
  }
}
