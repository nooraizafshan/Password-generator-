import { useState } from 'react';
import './App.css';
import { sc, uc, lc, num } from './data/Passchar';

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState('');

  const createPassword = () => {
    if (uppercase || lowercase || numbers || symbol) {
      let characters = '';
      if (uppercase) characters += uc;
      if (lowercase) characters += lc;
      if (numbers) characters += num;
      if (symbol) characters += sc;

      let generatedPassword = '';
      for (let i = 0; i < 12; i++) { // Assuming a default length of 12
        generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setPassword(generatedPassword);
    } else {
      alert('Please select at least one type of character');
    }
  };

  return (
    <div className="screen">
      <div className="box">
        <h1 className="heading">Password Generator</h1>
        <div className="passwordin">
          <input type="text" className="form-control" value={password} readOnly />
          <button className="btn" onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
        </div>
        <div className="passwordlength">
          <label>Password Length</label>
          <input type="number" max={20} />
        </div>
        <div className="passwordlength">
          <label>Include Uppercase</label>
          <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>
        <div className="passwordlength">
          <label>Include Lowercase</label>
          <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>
        <div className="passwordlength">
          <label>Include Numbers</label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
        </div>
        <div className="passwordlength">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbol} onChange={() => setSymbol(!symbol)} />
        </div>
        <button className="btn" onClick={createPassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
