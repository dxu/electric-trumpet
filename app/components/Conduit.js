import { connect } from 'react-redux'
import App from './App'

// The Conduit currently just connects all of the data, because we don't need special selectors for the application at this time

const selectors = (state) => {
  return {
    items: state.get('items'),
    archives: state.get('archives')
  }  
}

const dispatchers = (dispatch) => {
  return {
  } 
}

const Conduit = connect(selectors, dispatchers)(App)

export default Conduit
