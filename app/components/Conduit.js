import { connect } from 'react-redux'
import { addItem, addArchive } from '../actions'
import App from './App'

// The Conduit currently just connects all of the data, because we don't need special selectors for the application at this time


const selectActiveArchive = (archives, activeArchiveID) => {
  console.log(archives.toJS(), activeArchiveID)
  return archives.find(archive => activeArchiveID === archive.get('id'))
}


// these selectors will handle the unflattening of the store.
const selectors = (state) => {
  console.log(state.toJS())
  return {
    items: state.get('items'),
    archives: state.get('archives'),
    activeArchive: selectActiveArchive(state.get('archives'), state.get('activeArchive'))
  }  
}

const dispatchers = (dispatch) => {
  return {
    addItem: (text) => {
      dispatch(addItem({
        text: text
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
