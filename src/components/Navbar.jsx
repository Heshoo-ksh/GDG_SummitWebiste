import { useEffect, useMemo, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  const [activeLink, setActiveLink] = useState('landing')
  const [isNavVisible, setIsNavVisible] = useState(false)

  const navRef = useRef(null)

  // Sections and corresponding links
  const sections = useMemo(
    () => [
      { id: 'landing', text: 'Landing' },
      // { id: 'about', text: 'About' },
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
      // Initialize the active section and its IoU
      let activeIoU = 0

      // For each section
      sections.forEach((section) => {
        const target = document.querySelector(`#${section.id}`)

        // Get the bounding rectangle of the section
        const rect = target.getBoundingClientRect()

        // Calculate the intersection height
        const intersectionHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        )

        // Calculate the IoU
        const IoU =
          intersectionHeight /
          (rect.height + window.innerHeight - intersectionHeight)

        // If this section's IoU is higher than the current active section's IoU, update the active section
        if (IoU > activeIoU) {
          setActiveLink(section.id)
          activeIoU = IoU
        }
      })
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

  useEffect(() => {
    // Function to close the nav when the user clicks outside of it
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false)
      }
    }

    // Attach the click event listener
    document.addEventListener('click', handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 top-0 z-10 w-full p-4 ${
        activeLink === 'landing'
          ? 'bg-primary-400 text-sky-900'
          : 'bg-white shadow-lg'
      }`}
    >
      <button
        className="rounded border-2 px-4 md:hidden"
        onClick={() => setIsNavVisible(!isNavVisible)}
      >
        <FaBars className="h-10" />
      </button>
      <ul
        className={`flex flex-col space-y-4 overflow-hidden md:flex-row md:justify-end md:space-x-2 md:space-y-0 md:px-4 md:py-2 ${
          isNavVisible ? 'h-full' : 'h-0 md:h-full'
        }`}
      >
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={`#${section.id}`}
              onClick={(event) => handleNavigation(event, section.id)}
              className={`${section.id === 'landing' ? 'hidden' : ''} p-6 ${
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
