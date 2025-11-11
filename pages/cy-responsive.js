export default function CyResponsive() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Responsive Layout Test</h1>
      
      <div className="mb-8">
        <h2 className="text-lg mb-2">Changes with screen size:</h2>
        <div className="flex flex-col md:flex-row bg-gray-100">
          <div className="bg-red-400">Mobile: Stack</div>
          <div className="bg-blue-400">Desktop: Row</div>
          <div className="bg-green-400">Resize to see!</div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg mb-2">Grid changes columns:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-100">
          <div className="bg-yellow-400">Box 1</div>
          <div className="bg-purple-400">Box 2</div>
          <div className="bg-pink-400">Box 3</div>
          <div className="bg-orange-400">Box 4</div>
        </div>
      </div>
    </div>
  )
}