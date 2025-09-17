import React, { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      window.addEventListener('resize', handleResize)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMenu()
  }

  return (
    <>
      <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
        <a 
          href="/" 
          className={styles.title}
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Portfolio
        </a>
        
        <div className={styles.menu}>
          <button 
            className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtnOpen : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul 
            className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ''}`}
            role="menubar"
          >
            <li role="none">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#about')
                }}
                role="menuitem"
              >
                About
              </a>
            </li>
            <li role="none">
              <a 
                href="#experience" 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#experience')
                }}
                role="menuitem"
              >
                Experience
              </a>
            </li>
            <li role="none">
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#projects')
                }}
                role="menuitem"
              >
                Projects
              </a>
            </li>
            <li role="none">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#contact')
                }}
                role="menuitem"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {isMenuOpen && (
        <div 
          className={styles.backdrop} 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Navbar
