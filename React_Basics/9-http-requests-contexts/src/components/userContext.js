import React from "react";

const UserContext = React.createContext('{"userFullName":"Guest","userName":"Guest123"}');

//every component create with the createContext() function has a provider and consumer component. Export them.
// use pascal casing for naming as they are components

// Provider component is wrapped around the parent component whose descendant down the tree would need that data.
// App component is the best place as all the components are descendants of App components
const UserContextProvider = UserContext.Provider;

// Consumer component is wrapped around the component where the value needs to be used
const UserContextConsumer = UserContext.Consumer;

export { UserContextProvider, UserContextConsumer };
export default UserContext;