import React from 'react'

// renders a single list, handles the list of lists
const Input = React.createClass({
  render: () => {
    return (
      <div contentEditable="true">
        Enter your shit
      </div>
    )
  }
})

export default Input
