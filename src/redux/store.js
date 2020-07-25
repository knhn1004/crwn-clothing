import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer'

const middlewares = [logger]

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
