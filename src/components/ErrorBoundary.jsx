import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, key: 0 }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    if (import.meta.env.VITE_NODE_ENV === 'production') {
      //  Log to monitioring service
      console.log('Error caught:', error, info)
    } else {
      console.error(error, info)
    }
  }

  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false,
      error: null,
      key: prev.key + 1,
    }))
  }

  render() {
    if (this.state.hasError) {
      if (import.meta.env.VITE_NODE_ENV === 'development') {
        throw this.state.error
      }

      return (
        this.props.fallback || (
          <div className="py-56 text-center bg-orange-100 text-red-800 rounded">
            <h2 className="font-semibold text-2xl">
              Sorry, something went wrong
            </h2>
            <button
              onClick={this.handleRetry}
              className="mx-auto mt-2 px-4 py-1 bg-blue-600 text-white rounded"
            >
              Retry
            </button>
          </div>
        )
      )
    }

    return (
      <React.Fragment key={this.state.key}>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default ErrorBoundary
