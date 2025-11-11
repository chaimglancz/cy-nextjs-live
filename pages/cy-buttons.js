export default function CyButtons() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Button Styling Test</h1>
      
      <div className="mb-8">
        <h2 className="text-lg mb-4">Basic Buttons:</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
          Blue Button
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded mr-4">
          Red Button
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Green Button
        </button>
      </div>
      
      <div>
        <h2 className="text-lg mb-4">Hover Effects:</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-4">
          Hover Me
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
          Gray Hover
        </button>
      </div>
    </div>
  )
}