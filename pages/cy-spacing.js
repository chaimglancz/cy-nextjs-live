export default function CySpacing() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Spacing and Colors Test</h1>
      
      <div className="p-4 m-2 bg-green-100 border border-green-300">
        Small padding, small margin, light green background
      </div>
      
      <div className="p-8 m-4 bg-red-500 text-white">
        Large padding, medium margin, red background, white text
      </div>
      
      <div className="px-6 py-2 mx-auto bg-blue-200 text-blue-800 w-64">
        Horizontal padding, auto margin (centered), blue theme
      </div>
    </div>
  )
}