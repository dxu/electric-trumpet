import React from 'react'

// renders a single list, handles the list of lists
const Archive = React.createClass({
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

export default Archive