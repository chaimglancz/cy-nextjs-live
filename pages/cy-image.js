import Image from 'next/image';

export default function CyImage() {
  return (
    <div>
      <h1>Next.js Image Test</h1>
      
      <h2>Regular img tag:</h2>
      <img src="/cy-test-image.jpg" alt="Regular image" width="300" />
      
      <h2>Next.js Image component:</h2>
      <Image 
        src="/cy-test-image.jpg" 
        alt="Optimized image" 
        width={300} 
        height={200}
      />
    </div>
  );
}