import { guid } from '../util/helpers'

export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ARCHIVE = 'ADD_ARCHIVE'

export const addItem = (text) => {
  return {
    type: ADD_ITEM,
    id: guid(),
    text
  }
}

export const addArchive = (data) => {
  return {
    type: ADD_ARCHIVE,
    id: guid(),
    name: data.name
  }
}

export default actions
