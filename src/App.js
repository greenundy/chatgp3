// create a react component that inputs a textarea message then performs a fetch request to localhost:3001 and gets back  a response as a data.message and displays that message in a box below

import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://chatgp3-cco1.vercel.app:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return ( 
 
    <div className="App">
      <form onSubmit={handleSubmit}>
     
        <label htmlFor="message"> Chat GPT3 Davinci 003 <br/></label>
        <input
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /><br />
       
        <button type="submit">Send</button>
      </form>
      <hr></hr>
      <h1>Response</h1>
      <div class="response">{response}</div>
    </div>
  );
}

export default App;
