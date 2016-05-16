import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'

import { watchFetchItems, watchFetchArchives, watchAddArchive, watchAddItem } from './sagas'

import { DEFAULT_ARCHIVE_ID, DEFAULT_ARCHIVE_NAME } from './util/constants'

const defaultStore = {
  archives: [
  ],
  activeArchive: DEFAULT_ARCHIVE_ID
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, 
                           Immutable.fromJS(defaultStore),
                           applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetchArchives)
sagaMiddleware.run(watchFetchItems)
sagaMiddleware.run(watchAddArchive)
sagaMiddleware.run(watchAddItem)

export default store
