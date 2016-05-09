import React from 'react'

const Item = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired  
  },

  render: function() {
    return (
      <div>
        { this.props.text }
      </div>
    )
  }
})

export default Item
