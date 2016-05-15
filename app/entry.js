import Conduit from './components/Conduit'
import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import { Provider } from 'react-redux'

import { addItem, addArchive, getArchives } from './actions'
import store from './store'


let x = 10

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  store.dispatch(getArchives())
  ReactDOM.render(
    <Provider store={ store }>
      <Conduit />
    </Provider>,
    document.getElementById('genesis')
  )


  // Log the initial state
  console.log(store.getState())

  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
  let unsubscribe = store.subscribe(() =>
    console.log(store.getState().toJS())
  )

  // Stop listening to state updates
  // unsubscribe()


})
