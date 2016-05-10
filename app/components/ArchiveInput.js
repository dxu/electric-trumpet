import React from 'react'

// renders a single list, handles the list of lists
const ArchiveInput = React.createClass({
  onKey: function(evt) {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      this.props.dispatchAddArchive({
        // NOTE: ASSUMING CLIENT ONLY, no xss sanitization
        name: this._el.value
      })
      this._el.value = ''
    }
  },
  render: function() {
    const { activeArchive, displayArchive=false } = this.props
    return (
      <input onKeyDown={ this.onKey } ref={ el => this._el = el }/>
    )
  }
})

export default ArchiveInput
