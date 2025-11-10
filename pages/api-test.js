import { useState } from 'react';

export default function CyApiTest() {
  const [cyResult, setCyResult] = useState('');
  const [cyName, setCyName] = useState('');

  // Call API without query
  const cyTestNoQuery = async () => {
    const cyResponse = await fetch('/api/req-res');
    const cyData = await cyResponse.json();
    setCyResult(cyData.cyGreeting);
  };

  // Call API with name query
  const cyTestWithName = async () => {
    const cyResponse = await fetch(`/api/req-res?cyName=${cyName}`);
    const cyData = await cyResponse.json();
    setCyResult(cyData.cyGreeting);
  };

  return (
    <div>
      <h1>API Test</h1>
      
      <button onClick={cyTestNoQuery}>
        No Query
      </button>
      
      <div>
        <input 
          type="text"
          value={cyName}
          onChange={(e) => setCyName(e.target.value)}
          placeholder="Name"
        />
        <button onClick={cyTestWithName}>
          With Name
        </button>
      </div>

      <div>
        <p>{cyResult}</p>
      </div>
    </div>
  );
}