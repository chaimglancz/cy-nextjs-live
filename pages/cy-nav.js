export default function CyNav() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Logo</div>
          
          {/* Mobile menu button - shows on small screens */}
          <button className="text-white md:hidden">
            Menu
          </button>
          
          {/* Desktop navigation - hidden on mobile, shows on medium+ */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>
      </nav>
      
      <div className="p-8">
        <h1 className="text-2xl mb-4">Responsive Navigation</h1>
        <p>Resize your browser window to see the navigation change!</p>
        <p className="mt-2 text-sm text-gray-600">
          Mobile: Shows "Menu" button | Desktop: Shows navigation links
        </p>
      </div>
    </div>
  )
}