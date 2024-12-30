import React from 'react';
import FragmentComp from './fragment';

function ParentTable(props) {
    return (
        <div>
            <h3>Fragments</h3>
            <table>
                <tbody>
                    <FragmentComp />
                </tbody>
            </table>
        </div>
    );
}

export default ParentTable;