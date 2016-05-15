import React from 'react'

// renders a single list, handles the list of lists
const ItemInput = React.createClass({
  onKey: function(evt) {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      this.props.dispatchAddItem({
        // NOTE: ASSUMING CLIENT ONLY, no xss sanitization
        text: this._el.innerHTML,
        archive_id: this.props.activeArchive.get('_id')
      })
      this._el.innerHTML = ''
    }
  },
  render: function() {
    const { activeArchive, displayArchive=false } = this.props
    return (
      <div>
        {
          displayArchive ? 
            <p>Adding to { activeArchive.get('name') }</p> :
            null
        }
        <div contentEditable="true" 
          data-placeholder="enter shit here"
          onKeyDown={ this.onKey }
          ref={ el => this._el = el }>
        </div>
      </div>
    )
  }
})

export default ItemInput
