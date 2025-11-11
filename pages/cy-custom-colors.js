export default function CyCustomColors() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6">Custom Colors Test</h1>
      
      <div className="mb-6">
        <h2 className="mb-4">NEW: Custom brand colors</h2>
        <div className="bg-brand-500 text-white p-4 mb-2">
          bg-brand-500 (custom blue)
        </div>
        <div className="bg-brand-700 text-white p-4">
          bg-brand-700 (darker custom blue)
        </div>
      </div>
      
      <div>
        <h2 className="mb-4">Compare to regular colors:</h2>
        <div className="bg-blue-500 text-white p-4">
          bg-blue-500 (regular Tailwind blue)
        </div>
      </div>
    </div>
  )
}