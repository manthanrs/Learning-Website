import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Register</h1>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="block border p-2" />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="block border p-2" />
      <button onClick={register} className="bg-green-500 text-white p-2 mt-2">Register</button>
    </div>
  );
}

export default Register;
