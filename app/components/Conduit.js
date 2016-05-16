import { connect } from 'react-redux'
import Immutable from 'immutable'

import { addItem, addArchive, getArchives } from '../actions'

import App from './App'

// The Conduit currently just connects all of the data, because we don't need special selectors for the application at this time


const selectActiveArchive = (archives, activeArchiveID) => {
  return archives.find(archive => activeArchiveID === archive.get('_id'))
}


// these selectors will handle the unflattening of the store.
const selectors = (state) => {
  const archives = state.get('archives')
  const activeArchive = archives.length ?
    selectActiveArchive(archives, state.get('activeArchive'))
      .merge({
        items: state.get('items').filter(item => item.get('archive_id') === state.get('activeArchive'))
      }) :
    Immutable.Map({
      _id: '',
      items: []
    })
  return {
    items: state.get('items'),
    archives: state.get('archives'),
    activeArchive: activeArchive
  }  
}

const dispatchers = (dispatch) => {
  return {
    dispatchGetArchives: (data) => {
      dispatch(getArchives())
      
    },
    dispatchAddItem: (data) => {
      dispatch(addItem({
        text: data.text,
        archive_id: data.archive_id
      }))
    },
    dispatchAddArchive: (data) => {
      dispatch(addArchive({
        name: data.name
      }))
    },
  } 
}

const Conduit = connect(selectors, dispatchers)(App)

export default Conduit
