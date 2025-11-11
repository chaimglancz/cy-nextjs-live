export default function CyFlex() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Flex Direction Test</h1>
      
      <div className="mb-8">
        <h2 className="text-lg mb-2">Row Layout (default):</h2>
        <div className="flex bg-gray-100">
          <div className="bg-red-400">Box 1</div>
          <div className="bg-blue-400">Box 2</div>
          <div className="bg-green-400">Box 3</div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg mb-2">Column Layout:</h2>
        <div className="flex flex-col bg-gray-100">
          <div className="bg-red-400">Box 1</div>
          <div className="bg-blue-400">Box 2</div>
          <div className="bg-green-400">Box 3</div>
        </div>
      </div>
    </div>
  )
}