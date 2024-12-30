import React from 'react';

// ---> '../' for going one folder back (remember)
import '../stylesheets/styleComps.css'

const StyledComp = (props) => {
    let sClass = props.toggleClass ? 'styled-text' : '';

    return (<div>
        <p className={`${sClass} large-fonts`} >The styling is controlled using template literals and props.</p>
    </div>)
}

export default StyledComp;