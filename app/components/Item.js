import React from 'react'

const Item = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired  
  },

  createMarkup: function() {
    return {
      __html: this.props.title
    }
    
  },

  render: function() {
    return (
      <div className="items-item">
        <div className="items-item-date">
          1D
        </div>
        <div className="items-item-title" dangerouslySetInnerHTML={ {__html: this.props.title} }>
        </div>
      
      </div>
    )
  }
})

export default Item
