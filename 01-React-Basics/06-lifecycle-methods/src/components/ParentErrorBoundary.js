import React from 'react'
import ChildErrorBoundary from './ChildErrorBoundary'
import ErrorBoundary from './ErrorBoundary'

function ParentErrorBoundary() {
    return (
        <div>
            {/* wrapping error boundary around whole child list again causes unecessay chunks of app to go unfunctional */}
            {/* <ErrorBoundary> */}
                <ErrorBoundary>
                    <ChildErrorBoundary name="Batman" descriptor="Dark Knight" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ChildErrorBoundary name="Superman" descriptor="Peaceful Alien" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ChildErrorBoundary name="Wonder Woman" descriptor="Amazon Princess" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <ChildErrorBoundary name="Joker" descriptor="Villain" />
                </ErrorBoundary>
            {/* </ErrorBoundary> */}
        </div>
    )
}

export default ParentErrorBoundary