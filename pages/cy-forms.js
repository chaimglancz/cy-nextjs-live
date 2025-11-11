export default function CyForms() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Form Styling Test</h1>
      
      <div className="mb-8">
        <h2 className="text-lg mb-4">Basic Form:</h2>
        <div className="w-64">
          <label className="block text-gray-700 mb-2">Name:</label>
          <input 
            type="text" 
            className="border border-gray-300 p-2 w-full rounded"
            placeholder="Enter your name"
          />
        </div>
      </div>
      
      <div>
        <h2 className="text-lg mb-4">Focus Effects:</h2>
        <div className="w-64">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input 
            type="email" 
            className="border border-gray-300 focus:border-blue-500 p-2 w-full rounded"
            placeholder="Click to see focus effect"
          />
        </div>
      </div>
    </div>
  )
}