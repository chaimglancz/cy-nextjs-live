export default function CyDarkMode() {
  return (
    <div className="p-8 dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl mb-6">Dark Mode Test</h1>
      
      <div className="mb-6">
        <h2 className="mb-4">NEW: Dark mode classes</h2>
        <div className="bg-white dark:bg-gray-700 p-4 mb-2 border">
          This box changes color in dark mode
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          This text is gray-600 in light, gray-300 in dark
        </p>
      </div>
      
      <div>
        <h2 className="mb-4">How to test:</h2>
        <p className="text-sm">
          Change your browser/OS to dark mode to see the difference!
        </p>
      </div>
    </div>
  )
}