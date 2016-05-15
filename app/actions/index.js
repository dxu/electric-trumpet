import { guid } from '../util/helpers'

import { DEFAULT_ARCHIVE_ID } from '../util/constants'

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ARCHIVE = 'ADD_ARCHIVE'
export const SET_ACTIVE_ARCHIVE = 'SET_ACTIVE_ARCHIVE'

export const ARCHIVES_REQUESTED = 'ARCHIVES_REQUESTED'
export const ARCHIVES_RECEIVED = 'ARCHIVES_RECEIVED'
export const ARCHIVES_NOT_RECEIVED = 'ARCHIVES_NOT_RECEIVED'

export const ITEMS_REQUESTED = 'ITEMS_REQUESTED'
export const ITEMS_RECEIVED = 'ITEMS_RECEIVED'
export const ITEMS_NOT_RECEIVED = 'ITEMS_NOT_RECEIVED'

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
  console.log('data', data)
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

export const getArchives = () => {
  return {
    type: ARCHIVES_REQUESTED
  }
}
