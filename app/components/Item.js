import React from 'react'

const Item = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired  
  },

  render: function() {
    console.log('text', this.props)
    return (
      <div>
        { this.props.text }
      </div>
    )
  }
})

export default Item
