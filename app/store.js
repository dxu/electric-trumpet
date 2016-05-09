import { createStore } from 'redux'
import reducers from './reducers'
import Immutable from 'immutable'

export default createStore(reducers, Immutable.Map())
