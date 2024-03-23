import React, { Fragment } from 'react';

function FragmentComp (props) {
    return (
        // Will produce error as  <td> cannot appear as a child of <div>.

        // <div>
        //     <td > Column 1 </td>
        //     <td > Column 2 </td>
        //     <td > Column 3 </td>
        // </div>

        // <>
        //     <td > Column 1 </td>
        //     <td > Column 2 </td>
        //     <td > Column 3 </td>
        // </>

        // <React.Fragment>
        //     <td > Column 1 </td>
        //     <td > Column 2 </td>
        //     <td > Column 3 </td>
        // </React.Fragment>

        <Fragment>
            <td > Column 1 </td>
            <td > Column 2 </td>
            <td > Column 3 </td>
            <td > Column 4 </td>
        </Fragment>
    );
}

export default FragmentComp ;