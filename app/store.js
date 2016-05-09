import { createStore } from 'redux'
import reducers from './reducers'
import Immutable from 'immutable'

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

export default createStore(reducers, Immutable.fromJS(defaultStore))
