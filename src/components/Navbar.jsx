import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [activeLink, setActiveLink] = useState('landing')

  // Sections and corresponding links
  const sections = useMemo(
    () => [
      { id: 'landing', text: 'Landing' },
      { id: 'about', text: 'About' },
      { id: 'speakers', text: 'Speakers' },
      { id: 'sessions', text: 'Sessions' },
      { id: 'organizers', text: 'Organizers' },
      { id: 'location', text: 'Location' },
    ],
    []
  )

  useEffect(() => {
    // Function to set the active link based on scroll position
    const handleScroll = () => {
      // Determine which section is currently in view
      for (const section of sections) {
        const target = document.querySelector(`#${section.id}`)
        if (target) {
          const { top, bottom } = target.getBoundingClientRect()
          if (Math.round(top) <= 0 && Math.round(bottom) > 0) {
            setActiveLink(section.id)
            break // No need to check further
          }
        }
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const handleNavigation = (event, sectionId) => {
    event.preventDefault()
    const target = document.querySelector(`#${sectionId}`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-10 w-full bg-white p-4 shadow">
      <ul className="flex justify-end space-x-2 px-4 py-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={`#${section.id}`}
              onClick={(event) => handleNavigation(event, section.id)}
              className={`${section.id === 'landing' ? 'invisible' : ''} p-6 ${
                activeLink === section.id ? 'text-primary-500' : ''
              }`}
            >
              {section.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
