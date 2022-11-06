import React, { useState } from 'react';

const FormComp = (props) => {
    let [mailID, setMailId] = useState('');
    let [comment, setComment] = useState('');
    let [guess, setGuess] = useState('');
    let [toggleForm, setToggle] = useState(true);

    const handleMailInput = (event) => setMailId(event.target.value);

    const handleComment = (event) => setComment(event.target.value);

    const handlefavChange = (event) => setGuess(event.target.value);

    const handleSubmit = (event) => {
        alert(`Thank you ${mailID}`);
        setToggle(!toggleForm);
        event.preventdefault();
        return;
    }

    return (<div>
        {toggleForm ? 
            <form className='formClass' onSubmit={handleSubmit}>
                <div className="formAttrWrapper">
                    <label className="formLabelWrapper">Email ID:</label>
                    <input 
                        className='formInput'
                        name='mailInput'
                        placeholder='Please enter your mail ID'
                        value={mailID}
                        onChange={handleMailInput}></input>
                </div>
                <div className="formAttrWrapper">
                    <label className="formLabelWrapper">Comments:</label>
                    <textarea
                        className='formtextArea'
                        name='commentsInput'
                        placeholder='Please provide your valueable feedback'
                        value={comment}
                        onChange={handleComment}></textarea>
                </div>
                <div className="formAttrWrapper">
                    <label className="formLabelWrapper">Which library/framework do you work on?</label>
                    <select
                        value={guess} 
                        className="formSelect"
                        onChange={handlefavChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='SAP UI5'>SAP UI5</option>
                    </select>
                </div>
                <button className='formSubmit' type='submit'>Submit feedback</button>
            </form> :
            <h2 className='formGratitude'>Thank you for submitting the feedback!!</h2>
        }
    </div>)
}

export default FormComp;