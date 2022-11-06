import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isError : false
      }
    }

    static getDerivedStateFromError(error) {
        console.log(error)
        return {
            isError : true
        }
    }

    render() {
        if (this.state.isError) {
            return <h4 style={{color:"red"}}>Something's wrong. This is fallback UI.</h4>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary