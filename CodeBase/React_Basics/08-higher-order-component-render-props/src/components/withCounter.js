import React from "react";

// here we have created a function which takes original component as input and returns an enhanced component
// According to naming convention, HOCs are named in camel casing, 
// original components passed as arguments are named as WrappedCOmponent
// And the returned component are named as the HOC function names

const withCounter = (WrappedComponent, freqn) => {

    // Enhanced class is the new compoent being prepared, with original compoennt as its base and new functinos added as toppings
    return class EnhancedClass extends  React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count : 0,
                version:"1.01"
            }
    
        }
    
        incrementCount = () => {
            this.setState((prevState) => {
                console.log(this.state)
                return { count : prevState.count + freqn }
            }, () => console.log(this.state))
            return
        }

      render() {
        return (
            
            // ################################################################################################
            // All the new functionality and data are passed as props to the wrapped components so that they can
            //  be accessed from the actual components
            // ################################################################################################

          <WrappedComponent count={this.state.count} countIncrementFn={this.incrementCount} {... this.props} />

          // spread operator is used to pass down any extra props, to the wrappedComponent, from the Parent of the HOC(WrappedComponent)
        )
      }
    }
}
    
export default withCounter