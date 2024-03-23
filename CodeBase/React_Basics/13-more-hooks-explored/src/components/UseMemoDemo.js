import React, { useState } from 'react'

const UseMemoDemo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const count1Inc = () => {
        // let i = 0;
        // while (i < 2500000000) i++;

        setCount1(count1+1);
    }

  return (
    <div>
        counter - {count1}
        <button onClick={count1Inc} > Increase count 1 </button>
        counter - {count2}
        <button onClick={() => setCount2(count2 + 1)} > Increase count 2 </button>
    </div>
  )
}

export default UseMemoDemo