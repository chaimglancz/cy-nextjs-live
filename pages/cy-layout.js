export default function CyLayout() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-center mb-6">Layout Test</h1>
      
      <div className="flex justify-center mb-4">
        <div className="bg-blue-500 text-white p-4">
          Centered Box
        </div>
      </div>
      
      <div className="flex justify-between bg-gray-100 p-4">
        <div className="bg-red-400 p-2">Left</div>
        <div className="bg-green-400 p-2">Right</div>
      </div>
    </div>
  )
}