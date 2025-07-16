/* import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
<Navbar />
{children}
<Footer />
    </>
  )
}

export default layout */

import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main id="main-content" className="min-h-[80vh]">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout