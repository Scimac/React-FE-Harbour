## CSS styling

Four ways of styling the react components:
1. CSS Stylesheets
    - Import the stylesheets as - `import './App.css';`
    - Create a css file for all the class names
    - use `className` attribute instead of `class` in normal HTML files and use CSS like regular css.
    - we can use props to dynamically allot classNames, in the battick we can give classNames that will be present      irrespective of the props.
        `let sClass = props.toggleClass ? 'styled-text' : '';` 
        ` <p className={`${sClass} large-fonts`} >The styling is controlled using template literals and props.</p>`

2. Inline Styling
    - we use `style={}` attribute in the html element in the react component to style using inline css
    - css classes are declared as a JSON object and passed to the `style` attribute
    - Instead of using a `snake-casing` we use `camelCasing` for the CSS properties, separated by ','

3. CSS Modules
    - Only available for **react-scripts** greater than **version 2.0.0**, update **package.json** if not updated.
    - css modules are created using the extension - `styleSheetname.module.css` and are imported into the application as 
        `import {newStyles} from '../stylesheets/moduleSheets.module.css'`
    - Difference in applying classes - 
        Normal Stylesheets ---> `<h2 className='styled-text'>Css from the stylesheets</h2>`
        Modules Stylesheets ---> `<h2 className={classesDef.purpleText}>CSS from the css moduleSheets</h2>`
    - Major advantage of using CSS Modules is that they have a **local scope**. Therefore, you won't accidently use css class designed for one component to another component as the module style sheet is not imported.
    
4. CSS in JS Libraries (Styled Components) --> ## Check this in future

## Form handling

- ### Controlled Components
    - Components whose value is controlled by react states or hooks are called controlled components
    - E.g for an Input tag to be converted to controlled component - 
        1. First make the input element, value is assigned to a state/hook therefore giving full control of value to react - 
            `<input name='mailInput' value={mailID} onChange={handleMailInput}></input>`
        2. Set the state/hook for storing the value - 
            `let [mailID, setMailId] = useState('');`
        3. handle function to update the valeu as it changes - 
            `const handlefavChange = (event) => setGuess(event.target.value);`

- `form` tag has the default html setting to redirect to new html page once the form is submitted, to avaoid this:
    - either don't use `form` tag  ^_^    ---> Instead use a div with submit button click event  
    - or add a submit event in the `form` tage and use `event.preventDefault()` to avoid routing.
