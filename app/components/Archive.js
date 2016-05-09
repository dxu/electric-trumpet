import React from 'react'
import Item from './Item'
import ImmutableProptypes from 'react-immutable-proptypes'

const Archive = React.createClass({
  propTypes: {
    items: ImmutableProptypes.list.isRequired
  },
  render: function() {
    return (
      <div>
        {
          this.props.items.map((data) => {
            <Item key={ data.id } text={ data.text } />
          })
        }
      </div>
    )
  }
})

export default Archive
