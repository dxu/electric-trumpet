import React from 'react'

import ItemInput from './ItemInput'
import Archive from './Archive'
import Archives from './Archives'
import ArchiveInput from './ArchiveInput'

import ImmutableProptypes from 'react-immutable-proptypes'

// renders a single list, handles the list of lists
const App = React.createClass({
  propTypes: {
    items: ImmutableProptypes.list.isRequired,
    archives: ImmutableProptypes.list.isRequired,
    activeArchive: ImmutableProptypes.map.isRequired,
  },
  render: function() {
    let { activeArchive, dispatchAddItem, dispatchAddArchive, archives } = this.props
    return (
      <div>
        <ArchiveInput dispatchAddArchive={ dispatchAddArchive }/>
        <h1>{ activeArchive.get('name') }</h1>
        <ItemInput dispatchAddItem={ dispatchAddItem } activeArchive={ activeArchive } />

        <Archives archives={ archives } />
        <Archive key={ activeArchive.get('_id') } name={ activeArchive.get('name') } items={ activeArchive.get('items') } />
      </div>
    )
  }
})

export default App
