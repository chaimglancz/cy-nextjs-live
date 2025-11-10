import { useState, useEffect } from 'react';

export default function Cy() {
  const startTime = performance.now();
  
  // Heavy calculation on client
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  
  const endTime = performance.now();
  console.log('CSR Browser time:', (endTime - startTime).toFixed(2), 'ms');
  
  return (
    <div>
      <h1>CSR Loaded!</h1>
      <p>Calculation: {result.toFixed(2)}</p>
    </div>
  );
}