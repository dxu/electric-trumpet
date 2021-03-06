import { combineReducers } from 'redux-immutablejs'
import { ADD_ITEM, ADD_ARCHIVE, SET_ACTIVE_ARCHIVE, ARCHIVES_RECEIVED, ARCHIVES_NOT_RECEIVED, ARCHIVE_ADDED, ARCHIVE_NOT_ADDED, ITEM_ADDED, ITEM_NOT_ADDED, ITEMS_RECEIVED, ITEMS_NOT_RECEIVED, DISPLAY_ARCHIVES } from '../actions'

import { DEFAULT_ARCHIVE_ID } from '../../util/constants'

import Immutable from 'immutable'

/*
 * Structure of the Store:
 *  {
 *    archives: [
 *      {
 *        _id: '',
 *        name: 'Sample name'
 *      }, ...
 *    ]
 *    items: [
 *      {
 *        _id: '',
 *        archive_id: '',
 *        title: '',
 *        content: '', 
 *        date: date
 *      }
 *    ]
 *  }
 */

function archives(state = Immutable.List(), action) {
  switch (action.type) {
    case ARCHIVES_RECEIVED: 
      return state.concat(Immutable.fromJS(action.archives))
    case ARCHIVE_ADDED:
      return state.push(Immutable.fromJS(action.archive))
    case ARCHIVE_NOT_ADDED:
      console.error('archive not added', action.error)
      return state
    case ADD_ARCHIVE:
      return state.push(Immutable.Map({
        name: action.name,
        _id: action._id
      }))
    case ARCHIVES_NOT_RECEIVED: 
      console.error(action.error)
      return state
    default:
      return state
  }
}

function items(state = Immutable.List(), action) {
  switch (action.type) {
    case ITEMS_RECEIVED:
      return state.concat(Immutable.fromJS(action.items))
    case ITEMS_NOT_RECEIVED:
      console.error(action.error)
      return state
    // TODO: SHOULD SANITIZE IF EVER STORING THIS
    case ADD_ITEM:
      return state.push(Immutable.Map({
          content: action.content,
          title: action.title,
          _id: action._id,
          date: action.date,
          archive_id: action.archive_id
        }))
    case ITEM_ADDED:
      return state.push(Immutable.fromJS(action.item))
    case ITEM_NOT_ADDED:
      console.error(action.error)
      return state
    default:
      return state
  }
}

function activeArchive(state = DEFAULT_ARCHIVE_ID, action) {
  switch (action.type) {
    case SET_ACTIVE_ARCHIVE:
      return action._id
    default:
      return state
  }
}

function displayArchives(state = false, action) {
  switch (action.type) {
    case DISPLAY_ARCHIVES:
      console.log('lswjeoijweofihiuh')
      return action.displayArchives
    default:
      return state
  }
}

const reducers = combineReducers({
  archives,
  items,
  activeArchive,
  displayArchives
})

export default reducers
