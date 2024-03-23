import React from 'react'
import useInput from './hooks/useInput';

const InputForm = () => {
  const [firstName, BindFirstName, resetFirstName] = useInput('');
  const [lastName, BindLastName, resetLastName] = useInput('');

  const handleSubmit = (event) => {
    //To prevent the page from refreshing
    event.preventDefault();

    alert(`The name entered is ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor='firstNameIp' >First Name</label>

        {/* IMPORTANT, PLEASE CHECK THE SPREADED PROPERTIES FOR INPUT. VERY INTERESTING */}

        {/* <input name='firstNameIp' value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} /> */}
        <input name='firstNameIp' {...BindFirstName} />

        <label htmlFor='lastNameIp' >Last Name</label>
        {/* <input name='lastNameIp' value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} /> */}
        <input name='lastNameIp' {...BindLastName} />

        <button >Submit</button>
      </form>
    </div>
  )
}

export default InputForm