
function SessionsSection() {
  return (
    <section
      id="sessions"
      className="flex h-screen flex-col items-center bg-blue-400 p-10" 
    >
      <h1 className="font-sans text-4xl font-bold italic text-white">Sessions</h1>
      <div className="mt-4 flex space-x-2 rounded-lg bg-black px-6 py-2 text-lg text-white">
        <button className="m-2 w-52">AI/ML</button>
        <button className="m-2 w-52">Mobile</button>
        <button className="m-2 w-52">Fullstack</button>
        <button className="m-2 w-52">Miscellaneous</button>
      </div>
    
      
    </section>
  )
}

export default SessionsSection
