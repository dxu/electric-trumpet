import React from 'react'

import Input from './Input'
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
    let { activeArchive } = this.props
    console.log(activeArchive.toJS(), 'js')
    return (
      <div>
        <Input />
        <Archive key={ activeArchive.get('id') } name={ activeArchive.get('name') } items={ activeArchive.get('items') } />
      </div>
    )
  }
})

export default App
