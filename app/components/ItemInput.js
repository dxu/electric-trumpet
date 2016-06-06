import React from 'react'

// renders a single list, handles the list of lists
const ItemInput = React.createClass({
  onKeyAddContent: function(evt) {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      evt.preventDefault()
      this.props.dispatchAddItem({
        // NOTE: ASSUMING CLIENT ONLY, no xss sanitization
        content: this._inputContentEl.innerHTML,
        archive_id: this.props.activeArchive.get('_id')
      })
      this._inputContentEl.innerHTML = ''
    }
  },
  onKeyAddTitle: function(evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault()
      this.props.dispatchAddItem({
        // NOTE: ASSUMING CLIENT ONLY, no xss sanitization
        title: this._inputTitleEl.value,
        archive_id: this.props.activeArchive.get('_id')
      })
      this._inputTitleEl.value = ''
    }
  },
  render: function() {
    const { activeArchive, displayArchive=false, contentPlaceholderText="" , titlePlaceholderText="" } = this.props
    return (
      <div className="items-input" ref={ el => this._wrapperEl = el }>
        {
          displayArchive ? 
            <p>Adding to { activeArchive.get('name') }</p> :
            null
        }
        <input className="items-input-title"
          contentEditable="true" 
          placeholder={titlePlaceholderText}
          onKeyDown={ this.onKeyAddTitle }
          ref={ el => this._inputTitleEl = el } />
        <div className="items-input-content"
          contentEditable="true" 
          data-placeholder={contentPlaceholderText}
          onKeyDown={ this.onKeyAddTitle }
          ref={ el => this._inputContentEl = el }>
        </div>
      </div>
    )
  }
})

export default ItemInput
