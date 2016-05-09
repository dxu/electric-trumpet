import React from 'react'
import List from './List'
import Input from './Input'
import Archive from './Archive'

// renders a single list, handles the list of lists
const App = React.createClass({
  render: () => {
    return (
      <div>
        <Input />
        <List />
        <Archive />
      </div>
    )
  }
})

export default App
