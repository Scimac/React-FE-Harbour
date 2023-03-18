import React from 'react';
import ReactDOM from 'react-dom';

function PortalComp() {
  return ReactDOM.createPortal (
    <div className='hideClass'>
        <h3>This Element is not in App Node</h3>
        <div>We made it escape the parent DOM tree</div>
    </div>
  , document.getElementById('root'))
}

export default PortalComp