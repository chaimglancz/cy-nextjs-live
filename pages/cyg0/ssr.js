export default function Cy({ calculation }) {
  const startTime = performance.now();
  const endTime = performance.now();
  console.log('SSR Browser time:', (endTime - startTime).toFixed(2), 'ms');
  
  return (
    <div>
      <h1>SSR Loaded!</h1>
      <p>Calculation: {calculation?.toFixed(2)}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const serverStart = Date.now();
  
  // Heavy calculation on server
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  
  const serverEnd = Date.now();
  console.log('SSR Server time:', (serverEnd - serverStart), 'ms');
  
  return {
    props: {
      calculation: result
    }
  };
}