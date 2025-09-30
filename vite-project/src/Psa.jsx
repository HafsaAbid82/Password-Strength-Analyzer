import { useState } from 'react';
import './Psa.css';

const Psa = () => {
  const [password, setPassword] = useState("");


  const calculateCharsetSize = (password) => {
    let size = 0;
    if (password.match(/[a-z]/)) size += 26;
    if (password.match(/[A-Z]/)) size += 26;
    if (password.match(/[0-9]/)) size += 10;
    if (password.match(/[^a-zA-Z0-9]/)) size += 32;
    return size;
  };


  const calculateEntropy = (charsetSize, length) =>
    charsetSize > 0 && length > 0 ? (length * Math.log2(charsetSize)) : 0;

  const charsetSize = calculateCharsetSize(password);
  const entropy = calculateEntropy(charsetSize, password.length).toFixed(1);
  const crackTime = estimateCrackTime(entropy);

  function estimateCrackTime(entropy) {
    if (entropy == 0) return "Instantly";
    if (entropy < 28) return "5 seconds ";
    if (entropy < 36) return "1hours 5 min";
    if (entropy < 60) return "5 Months 45 years";
    return "Centuries";
  }

  return (
    <div className="block">
      <h1>Password Strength Analyser</h1>
      <p>Discover the strength of your password with this client-side-only password strength analyser and crack time estimation tool..</p>

      <input
        type="password"
        placeholder="Enter a password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='block_input'
      />

      <div className="card">
        <p>Duration to crack this password with brute force:</p>
        <h2>{crackTime}</h2>
      </div>

      <div className="card">
        <p>Password length: {password.length}</p>
        <p>Entropy: {entropy} bits </p>
        <p>Character set size: {charsetSize} </p>
        <p>Score: {entropy}/100 </p>
      </div>

      <div className="note">
        <span>Note: </span>
        The computed strength is based on the time it would take to crack the password using a brute force approach,
        it does not take into account the possibility of a dictionary attack.
      </div>
    </div>
  );
};

export default Psa;