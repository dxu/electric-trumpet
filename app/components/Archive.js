import React from 'react'
import Item from './Item'
import ImmutableProptypes from 'react-immutable-proptypes'

const Archive = React.createClass({
  propTypes: {
    items: ImmutableProptypes.list.isRequired
  },
  render: function() {
    return (
      <div className="archives-archive">
        {
          this.props.items.map((data) => {
            return <Item key={ data.get('_id') } content={ data.get('content') } />
          })
        }
      </div>
    )
  }
})

export default Archive
