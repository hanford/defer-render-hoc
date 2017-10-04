import React, { PureComponent } from 'react'
import raf from 'raf'

/**
 * Allows two animation frames to complete to allow other components to update
 * and re-render before mounting and rendering an expensive `WrappedComponent`.
 */
export default function deferComponentRender (WrappedComponent) {
  return class DeferredRenderWrapper extends PureComponent {
    constructor(props, context) {
      super(props, context)
      this.state = { shouldRender: false }
    }

    componentDidMount() {
      raf(() => {
        raf(() => this.setState({ shouldRender: true }))
      })
    }

    render() {
      return this.state.shouldRender ? <WrappedComponent {...this.props} /> : null
    }
  }
}
