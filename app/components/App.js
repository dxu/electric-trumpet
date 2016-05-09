import React from 'react'
import { connect } from 'react-redux'

import List from './List'
import Input from './Input'
import Archive from './Archive'


// renders a single list, handles the list of lists
const App = React.createClass({
  render: function() {
    console.log(this.props, 'props')
    return (
      <div>
        <Input />
        <List />
        <Archive />
      </div>
    )
  }
})

const selectors = (state) => {
  return {
    items: state.get('items'),
    archives: state.get('archives')
  }  
}

const dispatchers = (dispatch) => {
  return {} 
}

export default connect(selectors, dispatchers)(App)
