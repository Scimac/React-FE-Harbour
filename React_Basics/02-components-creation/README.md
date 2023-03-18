## React BoilerPlate

This directory will concern with storing all the basics for react. 

> Houn Jau De!! HHM!!

A. boilerplate-from-npm
   1. For creating the project using npm, Make sure you have npm installed
   2. Follow either of the commands in the terminal - 

      - `npx create-react-app <Project_Name (Dont use capital letters in naming)>`

      - `npm install create-raect-app -g`
      - `create-react-app <Project_Name (Dont use capital letters in naming)>`

    npx - is npm's project manager

B. components-creation
   
   Project's all about components -
   - Functional Components - just a JSX code that is returned by the function Eg. the greet component created

      - export by name - Named Export
      - Default Export
         properties (Props) --> | JS Func Comp | --> JSX  
                           
   - Class Components
         properties (Props) --> |  ES6 Class (internal State)  | --> JSX   
         
                                                  
      - extends the component class in React
      - needs to have a renderer {} method that will return either null or the required JSX


   - Benefits of Functional Components:
     
      - Simple .js functions, Recommended to be used whenever possible
      - 'this' keyword is not present in such components
      - Solutions without state
      - Hence called Stateless/Dumb/Presentational Components

   - Benefits of Class Components:

      - More Feature Rich
      - Maintains their own private data too -- Called State
      - Slightly complex UI logic
      - Provide lifecycle Hooks
      - Hence Called Stateful/Smart/Container Components

   - JSX (JS XML extension)

      - Not necessary, but is simple to write and makes code manageable and readable.
      - It is later converted to vanilla js understood by browsers
      - some subtle differences are present in HTML and JSX

   - Props
      
      - Properties/attributes passed to the components dynamically during dev phase
      -  Mostly immutable by the childrens
      - Accessed by - 
         - `props` parameter passed to the functional components.
         - `this.props` by the class components.
         
   - State

      - State is like a variable that is managed within the function
      - Accessed by - 
         - `UseState Hook` parameter passed to the functional components.
         - `this.props` by the class components.
