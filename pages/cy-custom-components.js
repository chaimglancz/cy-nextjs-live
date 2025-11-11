export default function CyCustomComponents() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Custom Components Test</h1>
      
      <div className="mb-6">
        <h2 className="mb-4">NEW: Combining multiple classes</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-lg">
          Custom Button Style
        </button>
      </div>
      
      <div>
        <h2 className="mb-4">Custom card style:</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg">Card Title</h3>
          <p className="text-gray-600">This combines multiple Tailwind classes into one reusable component style.</p>
        </div>
      </div>
    </div>
  )
}