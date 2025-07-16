/* import HeroSection from "@/components/HeroSection";
import Filters from '@/components/Filters'
import Header from '@/components/Header';

import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'

import Image from 'next/image'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylist();
  
  console.log(resourcesPlaylist)

  return (
      <main className="flex-center px-5 pb-20 mx-auto w-full flex-col sm:px-20">

            <section className="nav-padding w-full">

            <HeroSection />
         <div className="flex-center relative w-full aspect-video flex-col rounded-xl bg-banner bg-cover bg-center text-center">
        </div> 

        <SearchForm />
      </section>

      <Filters />

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-4 w-full flex-col sm:mt-14 max-w-screen-2xl">
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />

          <div className="mt-6 flex w-full flex-wrap justify-center gap-16 sm:justify-center">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ): (
              <p className="body-regular text-grey-300">
                Aucun résultat
              </p>
            )}
          </div>
        </section>
      )}

{resourcesPlaylist.map((item: any) => (
        <section key={item._id} className="flex-center mt-4 w-full flex-col sm:mt-14 max-w-screen-2xl">
          <h1 className="heading3 self-center text-black-500">{item.title}</h1>
          <div className="mt-6 flex w-full flex-wrap justify-center gap-16 sm:justify-center">
            {item.resources.map((resource: any) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))}
          </div>
        </section>
      ))}

    </main>
  )
}

export default Page */

import HeroSection from "@/components/HeroSection"
import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'

import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import type { Metadata } from "next"

export const revalidate = 900

export const metadata: Metadata = {
  title: 'Accueil | Symbiose Web Solutions',
  description: 'Explorez nos ressources web gratuites : outils, modèles, tutoriels et plus. Propulsé par Symbiose Web Solutions.',
  keywords: [
    'ressources web',
    'Symbiose Web Solutions',
    'modèles',
    'tutoriels',
    'développement web',
    'outils',
    'ressources gratuites',
    'SEO'
  ],
  openGraph: {
    title: 'Accueil | Symbiose Web Solutions',
    description: 'Accédez à une sélection de ressources numériques gratuites pour développer vos projets web.',
    url: 'https://symbioseweb.com',
    siteName: 'Symbiose Web Solutions',
    type: 'website',
    locale: 'fr_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Symbiose Web Solutions',
    description: 'Explorez des ressources web gratuites et utiles pour vos projets numériques.',
    site: '@symbioseweb',
  }
}

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylist()

  return (
    <main className="flex-center px-5 pb-20 mx-auto w-full flex-col sm:px-20" id="main-content">
      {/* Hero Section */}
      <section className="nav-padding w-full">
        <h1 className="sr-only">Ressources gratuites pour le web</h1>
        <HeroSection />

        {/* Optional banner background */}
        <div className="flex-center relative w-full aspect-video flex-col rounded-xl bg-banner bg-cover bg-center text-center" role="img" aria-label="Bannière visuelle de la section de ressources"></div>

        {/* Search */}
        <section id="searchbar">
          <SearchForm />
        </section>
      </section>

      {/* Filter Tags */}
      <Filters />

      {/* Search Result Section */}
      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-4 w-full flex-col sm:mt-14 max-w-screen-2xl" aria-labelledby="search-results-heading">
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />

          <div className="mt-6 flex w-full flex-wrap justify-center gap-16 sm:justify-center">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className="body-regular text-grey-300">
                Aucun résultat trouvé.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Playlist Section */}
      {resourcesPlaylist.length > 0 && resourcesPlaylist.map((item: any) => (
        <section key={item._id} className="flex-center mt-4 w-full flex-col sm:mt-14 max-w-screen-2xl" aria-labelledby={`playlist-${item._id}`}>
          <h2 id={`playlist-${item._id}`} className="heading3 self-center text-black-500">{item.title}</h2>
          <div className="mt-6 flex w-full flex-wrap justify-center gap-16 sm:justify-center">
            {item.resources?.length > 0 ? (
              item.resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className="text-grey-400">Aucune ressource dans cette section.</p>
            )}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Page
