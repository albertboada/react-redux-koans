import React from 'react'

export class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}
