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
      <div className="items-item">
        <div className="items-item-date">
          1D
        </div>
        <div className="items-item-title" dangerouslySetInnerHTML={ {__html: this.props.text} }>
        </div>
      
      </div>
    )
  }
})

export default Item
