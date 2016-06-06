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
    let { activeArchive, dispatchShouldDisplay, dispatchAddItem, dispatchAddArchive, archives, displayArchives } = this.props
    // dispatchShouldDisplay(true)
    return (
      <div>
        <h1 id="archives-active">{ activeArchive.get('name') }</h1>
        <div id="wrappers-archive">
          <ItemInput 
            dispatchAddItem={ dispatchAddItem } 
            activeArchive={ activeArchive } 
            titlePlaceholderText="Add something to do..." 
            contentPlaceholderText="Details?" />
          <Archive 
            key={ activeArchive.get('_id') } 
            name={ activeArchive.get('name') } 
            items={ activeArchive.get('items') } />
        </div>
        {
          displayArchives ? 
            (
              <div>
                <ArchiveInput dispatchAddArchive={ dispatchAddArchive }/>
                <Archives archives={ archives } />
              </div>
            ) : null
        }
      </div>
    )
  }
})

export default App
