'use client'

import { useEffect, useState } from 'react'
import NavigationResponsive from './navbar-responsive'
import NavigationBar from './navbar'

export default function ResponsiveNavbar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return isMobile ? <NavigationResponsive /> : <NavigationBar />
}
