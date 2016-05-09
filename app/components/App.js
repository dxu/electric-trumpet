import React from 'react'

import List from './List'
import Input from './Input'
import Archive from './Archive'


// renders a single list, handles the list of lists
const App = React.createClass({
  add: function() {
    this.props.addArchive('teststs')
  },
  render: function() {
    console.log(this.props, 'props')
    return (
      <div onClick={ this.add }>
    
        <Input />
        <List />
        <Archive />
      </div>
    )
  }
})
export default App
