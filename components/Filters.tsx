/* "use client"
import { formUrlQuery } from '@/sanity/utils';
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const links = ['tout', 'Site web', 'Application', 'Infographie', 'Motion-design']

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    
    if(active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }
    
    router.push(newUrl, { scroll: false });
  }
  return (
    <ul className="text-black-500 body-text no-scrollbar flex flex-col w-full max-w-full gap-2 overflow-auto py-8 flex-center md:flex-row">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            //active === link ?"gradient_blue-purple" : ""
            active === link ?"text-white-100 bg-green" : ""
          } whitespace-nowrap rounded-lg px-2 py-2.5 capitalize sm:px-4`}
        >
          {link}
        </button>

      ))}
    </ul>
  )
}

export default Filters */

'use client'

import { formUrlQuery } from '@/sanity/utils'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const links = ['Tout', 'Site web', 'Application', 'Infographie', 'Motion-design']

const Filters = () => {
  const [active, setActive] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link: string) => {
    const value = link.toLowerCase()
    let newUrl = ''

    if (active === link) {
      setActive('')
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link)
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value,
      })
    }

    router.push(newUrl, { scroll: false })
  }

  return (
    <nav
      className="w-full max-w-full py-8 overflow-auto no-scrollbar"
      aria-label="Filtres de catégorie"
    >
      <ul className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
        {links.map((link) => (
          <li key={link}>
            <button
              type="button"
              onClick={() => handleFilter(link)}
              aria-pressed={active === link}
              className={`capitalize whitespace-nowrap rounded-lg px-4 py-2.5 transition-colors duration-200 ${
                active === link
                  ? 'text-white-100 bg-green'
                  : 'text-black-500'
              }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Filters