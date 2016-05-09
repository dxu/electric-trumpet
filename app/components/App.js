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
    console.log(this.props, 'props')
    let { activeArchive } = this.props
    return (
      <div>
        <Input />
        <Archive key={ activeArchive.get('id') } name={ activeArchive.get('name') }/>
      </div>
    )
  }
})

export default App
