import { guid } from '../util/helpers'

import { DEFAULT_ARCHIVE_ID } from '../util/constants'

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ARCHIVE = 'ADD_ARCHIVE'
export const SET_ACTIVE_ARCHIVE = 'SET_ACTIVE_ARCHIVE'

export const addItem = (data) => {
  // default value 
  data.archive_id = data.archive_id || DEFAULT_ARCHIVE_ID

  return {
    type: ADD_ITEM,
    id: guid(),
    text: data.text,
    date: new Date().getTime(),
    archive_id: data.archive_id
  }
}

export const addArchive = (data) => {
  return {
    type: ADD_ARCHIVE,
    id: guid(),
    name: data.name
  }
}

export const setActiveArchive = (data) => {
  return {
    type: SET_ACTIVE_ARCHIVE,
    id: data.id,
  }
}

