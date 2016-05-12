import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'

import { watchFetchItems, watchFetchArchives } from './sagas'

import { DEFAULT_ARCHIVE_ID, DEFAULT_ARCHIVE_NAME } from './util/constants'

const defaultStore = {
  archives: [
    {
      id: DEFAULT_ARCHIVE_ID,
      name: DEFAULT_ARCHIVE_NAME
    }
  ],
  activeArchive: DEFAULT_ARCHIVE_ID
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, 
                           Immutable.fromJS(defaultStore),
                           applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchArchives)
sagaMiddleware.run(watchFetchItems)

export default store
