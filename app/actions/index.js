import { guid } from '../util/helpers'

import { DEFAULT_ARCHIVE_ID } from '../util/constants'

export const ADD_ITEM = 'ADD_ITEM'
// export const ADD_ARCHIVE = 'ADD_ARCHIVE'
export const SET_ACTIVE_ARCHIVE = 'SET_ACTIVE_ARCHIVE'

export const ARCHIVES_REQUESTING = 'ARCHIVES_REQUESTING'
export const ARCHIVES_RECEIVED = 'ARCHIVES_RECEIVED'
export const ARCHIVES_NOT_RECEIVED = 'ARCHIVES_NOT_RECEIVED'

export const ARCHIVE_ADDING = 'ARCHIVE_ADDING'
export const ARCHIVE_ADDED = 'ARCHIVE_ADDED'
export const ARCHIVE_NOT_ADDED = 'ARCHIVE_NOT_ADDED'

export const ITEMS_REQUESTING = 'ITEMS_REQUESTING'
export const ITEMS_RECEIVED = 'ITEMS_RECEIVED'
export const ITEMS_NOT_RECEIVED = 'ITEMS_NOT_RECEIVED'

export const addItem = (data) => {
  // default value 
  data.archive_id = data.archive_id || DEFAULT_ARCHIVE_ID

  return {
    type: ADD_ITEM,
    _id: guid(),
    text: data.text,
    date: new Date().getTime(),
    archive_id: data.archive_id
  }
}

export const addArchive = (data) => {
  console.log('data', data)
  return {
    type: ARCHIVE_ADDING,
    _id: guid(),
    name: data.name
  }
}

export const setActiveArchive = (data) => {
  return {
    type: SET_ACTIVE_ARCHIVE,
    _id: data.id,
  }
}

export const getArchives = () => {
  return {
    type: ARCHIVES_REQUESTING
  }
}
