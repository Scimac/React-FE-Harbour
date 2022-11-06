import React, { useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle';

const DocTitleChange = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useDocumentTitle(count1);
    useDocumentTitle(count2);

    return (
        <div>
            <span>Counter1 - {count1} </span>
            <button onClick={() => setCount1(count1+1)}> Inc Count </button>
            <span>Counter2 - {count2} </span>
            <button onClick={() => setCount2(count2+1)}> Inc Count </button>
        </div>
    )
}

export default DocTitleChange