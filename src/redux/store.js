import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddlware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./sagas";

const middleware = [
  logger,
]

const configureStore = () => {
  const sagaMiddleware = createSagaMiddlware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware, sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore