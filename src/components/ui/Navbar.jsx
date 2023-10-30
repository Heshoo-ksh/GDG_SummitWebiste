import { Link } from 'react-router-dom'

function Navbar() {
  const handleNavigation = (event, sectionId) => {
    event.preventDefault()
    const target = document.querySelector(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed left-0 top-0 w-full bg-white p-4 shadow">
      <ul className="flex justify-end space-x-2 px-4 py-2">
        <li>
          <Link
            to="/#about"
            onClick={(event) => handleNavigation(event, '#about')}
            className="p-6"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/#speakers"
            onClick={(event) => handleNavigation(event, '#speakers')}
            className="p-6"
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            to="/#sessions"
            onClick={(event) => handleNavigation(event, '#sessions')}
            className="p-6"
          >
            Sessions
          </Link>
        </li>
        <li>
          <Link
            to="/#location"
            onClick={(event) => handleNavigation(event, '#location')}
            className="p-6"
          >
            Location
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
