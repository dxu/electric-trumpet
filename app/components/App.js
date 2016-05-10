import React from 'react'

import ItemInput from './ItemInput'
import Archive from './Archive'

import ImmutableProptypes from 'react-immutable-proptypes'

// renders a single list, handles the list of lists
const App = React.createClass({
  propTypes: {
    items: ImmutableProptypes.list.isRequired,
    archives: ImmutableProptypes.list.isRequired,
    activeArchive: ImmutableProptypes.map.isRequired,
  },
  render: function() {
    let { activeArchive, addItem } = this.props
    return (
      <div>
        <div><input /><button>New Archive</button></div>
        <h1>{ activeArchive.get('name') }</h1>
        <ItemInput addItem={ addItem } activeArchive={ activeArchive } />
        <Archive key={ activeArchive.get('id') } name={ activeArchive.get('name') } items={ activeArchive.get('items') } />
      </div>
    )
  }
})

export default App
