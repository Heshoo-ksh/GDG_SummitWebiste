function Navbar() {
  return (
    <nav className="w-screen">
      <ul className="flex justify-end px-10 py-4">
        <li className="p-4">
          <a href="/">About</a>
        </li>
        <li className="p-4">
          <a href="/">Speakers</a>
        </li>
        <li className="p-4">
          <a href="/">Sessions</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
