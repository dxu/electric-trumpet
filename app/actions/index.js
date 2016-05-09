import { guid } from '../util/helpers'

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ARCHIVE = 'ADD_ARCHIVE'
export const SET_ACTIVE_ARCHIVE = 'SET_ACTIVE_ARCHIVE'

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    id: guid(),
    text: data.text
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

