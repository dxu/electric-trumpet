import React from 'react'

const Item = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired  
  },

  createMarkup: function() {
    return {
      __html: this.props.text
    }
    
  },

  render: function() {
    return (
      <div dangerouslySetInnerHTML={ {__html: this.props.text} }></div>
    )
  }
})

export default Item
