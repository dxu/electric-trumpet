import { connect } from 'react-redux'
import { addItem, addArchive } from '../actions'
import App from './App'

// The Conduit currently just connects all of the data, because we don't need special selectors for the application at this time


const selectActiveArchive = (archives, activeArchiveID) => {
  return archives.find(archive => activeArchiveID === archive.get('id'))
}


// these selectors will handle the unflattening of the store.
const selectors = (state) => {
  const activeArchive = 
    selectActiveArchive(state.get('archives'), state.get('activeArchive'))
      .merge({
        items: state.get('items').filter(item => item.get('archive_id') === state.get('activeArchive'))
      })
  return {
    items: state.get('items'),
    archives: state.get('archives'),
    activeArchive: activeArchive
  }  
}

const dispatchers = (dispatch) => {
  return {
    addItem: (data) => {
      dispatch(addItem({
        text: data.text,
        archive_id: data.archive_id
      }))
    },
    addArchive: (name) => {
      dispatch(addArchive({
        name: name
      }))
    },
  } 
}

const Conduit = connect(selectors, dispatchers)(App)

export default Conduit
