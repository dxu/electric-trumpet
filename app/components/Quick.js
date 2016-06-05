import React from 'react'

import ItemInput from './ItemInput'
import Archive from './Archive'
import Archives from './Archives'
import ArchiveInput from './ArchiveInput'

import ImmutableProptypes from 'react-immutable-proptypes'

// renders a single list, handles the list of lists
const Quick = React.createClass({
  propTypes: {
    items: ImmutableProptypes.list.isRequired,
    archives: ImmutableProptypes.list.isRequired,
    activeArchive: ImmutableProptypes.map.isRequired,
  },
  render: function() {
    let { activeArchive, dispatchAddItem} = this.props
    let style = {
      '-webkit-app-region': 'drag'
    }
    return (
      <div>
        <h1 style={ style }>{ activeArchive.get('name') }</h1>
        <ItemInput dispatchAddItem={ dispatchAddItem } activeArchive={ activeArchive } />
      </div>
    )
  }
})

export default Quick
