import React from 'react'
import Item from './Item'
import ImmutableProptypes from 'react-immutable-proptypes'

const Archive = React.createClass({
  propTypes: {
    items: ImmutableProptypes.list.isRequired
  },
  render: function() {
    console.log('hwoeijf', this.props.items.toJS())
    return (
      <div>
        {
          this.props.items.map((data) => {
            return <Item key={ data.get('id') } text={ data.get('text') } />
          })
        }
      </div>
    )
  }
})

export default Archive
