/* @flow */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from '../reducers'


export default function configureStore() {
  const store = createStore(
    reducers,
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
