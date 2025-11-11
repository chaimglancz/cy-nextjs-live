export default function CyCards() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Card Styling Test</h1>
      
      <div className="mb-8">
        <h2 className="text-lg mb-4">Basic Card:</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 w-64">
          <h3 className="text-xl font-bold mb-2">Card Title</h3>
          <p className="text-gray-600">This is a simple card with shadow and rounded corners.</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg mb-4">Multiple Cards:</h2>
        <div className="flex gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold">Card 1</h3>
            <p className="text-sm text-gray-500">Small card</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold">Card 2</h3>
            <p className="text-sm text-gray-500">Another card</p>
          </div>
        </div>
      </div>
    </div>
  )
}