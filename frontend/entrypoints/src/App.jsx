import React from 'react'
function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && (
        <div className="border-2 border-gray-900 p-4">
          <p className="text-green-500">I was hidden 👻</p>
        </div>
      )}
    </>
  )
}

export default App
