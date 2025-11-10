export default function CyEnv() {
  return (
    <div>
      <h1>Environment Variables Test</h1>
      
      <p>App Name: {process.env.NEXT_PUBLIC_APP_NAME}</p>
      <p>Version: {process.env.NEXT_PUBLIC_VERSION}</p>
      <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}