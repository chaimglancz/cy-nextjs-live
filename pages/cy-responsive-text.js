export default function CyResponsiveText() {
  return (
    <div className="p-2 md:p-6 lg:p-12">
      <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4 lg:mb-8">
        Responsive Text Sizes
      </h1>
      
      <div className="mb-4 md:mb-8">
        <h2 className="text-base md:text-xl lg:text-2xl mb-2 md:mb-4">
          This heading changes size
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          This paragraph text gets larger on bigger screens. 
          The spacing around elements also increases.
        </p>
      </div>
      
      <div className="bg-blue-100 p-2 md:p-4 lg:p-8 rounded">
        <h3 className="text-sm md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-4">
          Box with Responsive Padding
        </h3>
        <p className="text-xs md:text-sm lg:text-base">
          Notice how the padding inside this box increases as the screen gets larger.
        </p>
      </div>
    </div>
  )
}