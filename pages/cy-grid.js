export default function CyGrid() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Grid Layout Test</h1>
      
      <div className="mb-8">
        <h2 className="text-lg mb-2">2 Columns:</h2>
        <div className="grid grid-cols-2 bg-gray-100">
          <div className="bg-red-400">Box 1</div>
          <div className="bg-blue-400">Box 2</div>
          <div className="bg-green-400">Box 3</div>
          <div className="bg-yellow-400">Box 4</div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg mb-2">3 Columns:</h2>
        <div className="grid grid-cols-3 bg-gray-100">
          <div className="bg-red-400">Box 1</div>
          <div className="bg-blue-400">Box 2</div>
          <div className="bg-green-400">Box 3</div>
          <div className="bg-yellow-400">Box 4</div>
          <div className="bg-purple-400">Box 5</div>
          <div className="bg-pink-400">Box 6</div>
        </div>
      </div>
    </div>
  )
}