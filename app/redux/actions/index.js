import { guid } from '../../util/helpers'

import { DEFAULT_ARCHIVE_ID } from '../../util/constants'

export const ADD_ITEM = 'ADD_ITEM'
// export const ADD_ARCHIVE = 'ADD_ARCHIVE'
export const SET_ACTIVE_ARCHIVE = 'SET_ACTIVE_ARCHIVE'

export const ARCHIVES_REQUESTING = 'ARCHIVES_REQUESTING'
export const ARCHIVES_RECEIVED = 'ARCHIVES_RECEIVED'
export const ARCHIVES_NOT_RECEIVED = 'ARCHIVES_NOT_RECEIVED'

export const ARCHIVE_ADDING = 'ARCHIVE_ADDING'
export const ARCHIVE_ADDED = 'ARCHIVE_ADDED'
export const ARCHIVE_NOT_ADDED = 'ARCHIVE_NOT_ADDED'

export const ITEM_ADDING = 'ITEM_ADDING'
export const ITEM_ADDED = 'ITEM_ADDED'
export const ITEM_NOT_ADDED = 'ITEM_NOT_ADDED'

export const ITEMS_REQUESTING = 'ITEMS_REQUESTING'
export const ITEMS_RECEIVED = 'ITEMS_RECEIVED'
export const ITEMS_NOT_RECEIVED = 'ITEMS_NOT_RECEIVED'

export const DISPLAY_ARCHIVES = 'DISPLAY_ARCHIVES'

export const addItem = (data) => {
  // default value 
  data.archive_id = data.archive_id || DEFAULT_ARCHIVE_ID

  return {
    type: ITEM_ADDING,
    _id: guid(),
    content: data.content,
    date: new Date().getTime(),
    archive_id: data.archive_id
  }
}

export const addArchive = (data) => {
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

export const getItems = () => {
  return {
    type: ITEMS_REQUESTING
  }
}

export const displayArchives = (shouldDisplay) => {
  console.log('wefjoiejwfoj', shouldDisplay)
  return {
    type: DISPLAY_ARCHIVES,
    displayArchives: shouldDisplay
  }
}
