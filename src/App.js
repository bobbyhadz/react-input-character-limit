import './App.css';

import {useState} from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('');

  const handleNameChange = event => {
    setFirstName(event.target.value);
  };

  return (
    <div>
      <h2>Very long string</h2>
      <input
        maxLength={5}
        type="text"
        id="first_name"
        name="first_name"
        value={firstName}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default App;
