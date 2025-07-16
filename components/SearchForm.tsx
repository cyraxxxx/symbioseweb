/* "use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { formUrlQuery } from '@/sanity/utils';


const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if(search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      
      router.push(newUrl, { scroll: false });
    }, 300)
  
    return () => clearTimeout(delayDebounceFn)
  }, [search])

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
      <label className="flex-center relative w-full max-w-3xl">
        <Image 
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="Search icon"
        />
        <Input 
          className="base-regular h-fit border-0 bg-white-600 py-6 pl-20 pr-8 text-grey-300 !ring-0 !ring-offset-0 placeholder:text-grey-300"
          type="text"
          placeholder="Recherche"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}

export default SearchForm */

'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { formUrlQuery } from '@/sanity/utils'

const SearchForm = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [search, setSearch] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = ''

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search,
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query'],
        })
      }

      router.push(newUrl, { scroll: false })
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  return (
    <form
      className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5"
      role="search"
      aria-label="Formulaire de recherche de ressources"
    >
      <label
        htmlFor="site-search"
        className="sr-only"
      >
        Rechercher des ressources
      </label>

      <div className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-6 top-1/2 -translate-y-1/2"
          width={24}
          height={24}
          alt="Icône de loupe"
        />
        <Input
          id="site-search"
          name="search"
          className="base-regular h-fit border border-gray-300 bg-white py-4 pl-14 pr-4 text-black placeholder:text-gray-400 rounded-lg w-full"
          type="search"
          placeholder="Rechercher une ressource ou un mot-clé..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchForm
