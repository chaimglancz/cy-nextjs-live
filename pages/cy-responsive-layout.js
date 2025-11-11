export default function CyResponsiveLayout() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Complex Responsive Layout</h1>
      
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Main content - full width on mobile, 2/3 on desktop */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 mb-4">
            <h2 className="text-xl font-bold mb-4">Main Content</h2>
            <p className="text-gray-600 mb-4">
              This main content area takes full width on mobile and tablets,
              but becomes 2/3 width on large screens.
            </p>
            <p className="text-gray-600">
              The layout completely transforms from vertical stacking to 
              horizontal layout on larger screens.
            </p>
          </div>
        </div>
        
        {/* Sidebar - full width on mobile, 1/3 on desktop */}
        <div className="w-full lg:w-1/3">
          <div className="bg-blue-100 rounded-lg p-4 md:p-6">
            <h3 className="text-lg font-bold mb-4">Sidebar</h3>
            <p className="text-sm text-gray-700">
              This sidebar stacks below the main content on mobile,
              but appears on the right side on large screens.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}