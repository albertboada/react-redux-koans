import React from 'react'

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return Component => {
    class ConnectedComponent extends React.Component {
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => {
          this.forceUpdate()
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const props = mapStateToProps(this.context.store.getState())
        const dispatch = mapDispatchToProps(this.context.store.dispatch)

        return (
          <Component
            {...this.props}
            {...props}
            {...dispatch}
          />
        )
      }
    }

    ConnectedComponent.contextTypes = {
      whatIsThisKeySupposedToBeCalled: React.PropTypes.object
    }

    return ConnectedComponent
  }
}
