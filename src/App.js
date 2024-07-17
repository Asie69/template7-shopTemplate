import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App(props) {
  const [Inputs, setInputs] = useState({});
  const handleSubmit = (ev) => {
    ev.preventDefault();
   
  }
  const handleChange = (ev) => {
    console.log(Inputs);
    const name = ev.target.name;
    const value = ev.target.value;
    setInputs(values => ({ ...values, [name]: value }));

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text'  placeholder='username' name='username' value={Inputs.username || ""}
          onChange={handleChange} />
        <input type='text' placeholder='age' name='age' value={Inputs.age || ""}
          onChange={handleChange} />
        <input type='submit'/>
      </form>
    </>

  );
}
export default App;




