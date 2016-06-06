import React from 'react'

// renders a single list, handles the list of lists
const ItemInput = React.createClass({
  onKeyAddContent: function(evt) {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      evt.preventDefault()
      this.props.dispatchAddItem({
        // NOTE: ASSUMING CLIENT ONLY, no xss sanitization
        content: this._el.innerHTML,
        archive_id: this.props.activeArchive.get('_id')
      })
      this._el.innerHTML = ''
    }
  },
  onKeyAddTitle: function(evt) {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      evt.preventDefault()
      this.props.dispatchAddItem({
        // NOTE: ASSUMING CLIENT ONLY, no xss sanitization
        title: this._el.innerHTML,
        archive_id: this.props.activeArchive.get('_id')
      })
      this._el.innerHTML = ''
    }
  },
  render: function() {
    const { activeArchive, displayArchive=false, contentPlaceholderText="" , titlePlaceholderText="" } = this.props
    return (
      <div>
        {
          displayArchive ? 
            <p>Adding to { activeArchive.get('name') }</p> :
            null
        }
        <div className="items-input-content"
          contentEditable="true" 
          data-placeholder={contentPlaceholderText}
          onKeyDown={ this.onKeyAddTitle }
          ref={ el => this._el = el }>
        </div>
        <input className="items-input-title"
          contentEditable="true" 
          placeholder={titlePlaceholderText}
          onKeyDown={ this.onKeyAddTitle }
          ref={ el => this._el = el } />
      </div>
    )
  }
})

export default ItemInput
