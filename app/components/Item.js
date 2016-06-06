import React from 'react'

const Item = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired  
  },

  createMarkup: function() {
    return {
      __html: this.props.content
    }
    
  },

  render: function() {
    return (
      <div className="items-item">
        <div className="items-item-date">
          1D
        </div>
        <div className="items-item-title" dangerouslySetInnerHTML={ {__html: this.props.content} }>
        </div>
      
      </div>
    )
  }
})

export default Item
