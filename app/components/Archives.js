import React from 'react'
import Archive from './Archive'
import ImmutableProptypes from 'react-immutable-proptypes'

const Archives = React.createClass({
  propTypes: {
    archives: ImmutableProptypes.list.isRequired
  },
  render: function() {
    return (
      <div>
        {
          this.props.archives.map((data) => {
            return <li key={ data.get('id') }> { data.get('name') } </li>
          })
        }
      </div>
    )
  }
})

export default Archives
