/* @flow */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {Record} from 'immutable'

import reducers from '../reducers'
import {retrieveUserStoredInfo} from './persistData'

async function getInitialState() {
  let initialState
  let userData = await retrieveUserStoredInfo()
  if (userData && userData.token.expires < Date.now()) {
    initialState = new Record({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email
    })
  }
  return initialState
}

export default async function configureStore() {
  const store =  createStore(
    reducers,
    await getInitialState(),
    applyMiddleware(
      thunk,
      logger
    )
  )
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
