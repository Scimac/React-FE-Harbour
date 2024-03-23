import React, { useCallback, useMemo, useState } from 'react'
import Count from './Count';
import Title from './Title';
import Button from './Button';

const UseCallbackDemo = () => {
    const [age, setAge] = useState(132);
    const [salary, setSalary] = useState(500000);

    // Everytime the parent component rerenders, these functions are created anew, i.e their memory reference is changed.
    // Therefore, the React.memo() rerenders the button as salaryInc(prev) !== salaryInc(current)

    //we use useCallback() to prevent this creation of new function, until something significant changes in the dependencies.

    //Not working for me somehow!!.... Correction needed!

    const salaryInc = useCallback(() => {
        setSalary(salary + 50000);
    }, [salary]);

    //Even changing to useMemo is not working... WTF!
    const ageInc = useMemo(() => () => {
        setAge(age + 1);
    }, [age]);

    //For some reason, the style attribute(prop?) was causing the element to rerender even though the props were not changed... 
    // But if style is considered as prop, then maybe that's the reason.

    // changing it to className seems to do the trick!... Goddammit React!
    return (
        <div>
            <Title name='The Developer' />
            <Count text='Age' count={age} />
            {/* <Button style={{marginLeft : '1rem'}} evtHandler={ageInc}>Age Increase</Button> */}
            <Button className='marginLeftClass' evtHandler={ageInc}>Age Increase</Button>
            
            <br />

            <Count text='Salary' count={salary} />           
            {/* <Button style={{marginLeft : '1rem'}} evtHandler={salaryInc} >Salary Increase</Button> */}
            <Button className='marginLeftClass' evtHandler={salaryInc} >Salary Increase</Button>
        </div>
    )
}

export default UseCallbackDemo