import { useEffect, useMemo, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import compassLogo from '@/assets/images/compass_gray.png'

function Navbar() {
  const [activeLink, setActiveLink] = useState('landing')
  const [isNavVisible, setIsNavVisible] = useState(false)

  const navRef = useRef(null)

  const sections = useMemo(
    () => [
      { id: 'landing', text: 'Landing' },
      { id: 'location', text: 'Location' },
      { id: 'sessions', text: 'Sessions' },
      { id: 'sponsors', text: 'Partners' },
      { id: 'organizers', text: 'Job Board' },
      { id: 'speakers', text: 'Speakers' },
      { id: 'devteam', text: 'Dev Team' },
      { id: 'contactUs', text: 'Contact Us' },
    ],
    []
  )

  useEffect(() => {
    // Track which section is most in view (IoU)
    const handleScroll = () => {
      let activeIoU = 0
      sections.forEach((section) => {
        const target = document.querySelector(`#${section.id}`)
        if (!target) return

        const rect = target.getBoundingClientRect()
        const intersectionHeight = Math.max(
          0,
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        )

        const IoU =
          intersectionHeight /
          (rect.height + window.innerHeight - intersectionHeight)

        if (IoU > activeIoU) {
          setActiveLink(section.id)
          activeIoU = IoU
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
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
    // Close nav if user clicks outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed left-0 top-0 z-10 flex w-full items-center justify-between p-4 ${
        activeLink === 'landing'
          ? 'bg-primary-400 text-sky-900'
          : 'bg-white shadow-lg'
      }`}
    >
      {/* Logo & hamburger (mobile) */}
      <div className="flex items-center space-x-4">
        {/* Wrap the logo in a Link to scroll to the 'landing' section */}
        <Link
          to="#landing"
          onClick={(event) => handleNavigation(event, 'landing')}
          className="cursor-pointer"
        >
          <img src={compassLogo} alt="Compass Logo" className="h-10 w-auto" />
        </Link>

        <button
          className="rounded border-2 px-4 lg:hidden"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation links */}
      <ul
        className={`flex flex-col space-y-4 overflow-hidden lg:flex-row lg:justify-end lg:space-x-2 lg:space-y-0 lg:px-4 lg:py-2 ${
          isNavVisible ? 'h-full' : 'h-0 lg:h-full'
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
