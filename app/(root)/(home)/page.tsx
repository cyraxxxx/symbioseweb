import HeroSection from "@/components/HeroSection";
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
    //<main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <main className="flex-center px-20 pb-20 mx-auto w-full flex-col">




            <section className="nav-padding w-full">

            <HeroSection />

            {/* <div className="flex-center relative w-full flex-col text-center">
                <Image src="/symbiose-web-solutions.svg" alt="Symbiose Web Solutions" className="w-full text-black-500"
                width={450}
          height={300} />
               
            </div> */}
         {/* <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center"> */}
         <div className="flex-center relative w-full aspect-video flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          {/* <h1 className="sm:heading1 heading2 mb-6 text-center text-black-500">Symbiose Web Solutions</h1> */}
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

          <div className="mt-6 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
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
                No resources found
              </p>
            )}
          </div>
        </section>
      )}

{resourcesPlaylist.map((item: any) => (
        <section key={item._id} className="flex-center mt-4 w-full flex-col sm:mt-14 max-w-screen-2xl">
          <h1 className="heading3 self-start text-black-500">{item.title}</h1>
          <div className="mt-6 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
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

export default Page