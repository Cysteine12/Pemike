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
    if (import.meta.NODE_ENV === 'production') {
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
      if (import.meta.NODE_ENV === 'development') throw this.state.error

      return (
        this.props.fallback || (
          <div className="p-4 bg-red-100 text-red-700 rounded">
            <h2>Something went wrong</h2>
            <button
              onClick={this.handleRetry}
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
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
