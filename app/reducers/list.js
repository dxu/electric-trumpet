import { combineReducers } from 'redux'
import { ADD_ITEM, ADD_ARCHIVE } from './actions'

import Immutable from 'immutable'


/*
 * Structure of the Store:
 *  {
 *    archives: [
 *      {
 *        id: '',
 *        name: 'Sample name'
 *      }, ...
 *    ]
 *    items: [
 *      {
 *        id: '',
 *        archive_id: '',
 *        content: '', 
 *        date: date
 *
 *      }
 *    ]
 *  }
 */

function archives(state = Immutable.List(), action) {
  switch (action.type) {
    case ADD_ARCHIVE:
      return state.push(Immutable.Map({
        name: action.name,
        id: action.id
      }))
    default:
      return state
  }
}

function items(state = Immutable.List(), action) {
  switch (action.type) {
    case ADD_ITEM:
      return state.push(Immutable.Map({
          text: action.text,
          id: action.id
        }))
    default:
      return state
  }
}

const reducers = combineReducers({
  archives,
  items
})

export default reducers
