import { combineReducers } from 'redux-immutablejs'
import { ADD_ITEM, ADD_ARCHIVE, SET_ACTIVE_ARCHIVE } from '../actions'

import { DEFAULT_ARCHIVE_ID } from '../util/constants'

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

function activeArchive(state = DEFAULT_ARCHIVE_ID, action) {
  switch (action.type) {
    case SET_ACTIVE_ARCHIVE:
      return action.id
    default:
      return state
  }
}

const reducers = combineReducers({
  archives,
  items,
  activeArchive
})

export default reducers
