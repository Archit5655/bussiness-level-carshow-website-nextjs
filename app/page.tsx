import Customfilter from '@/components/Customfilter'
import Hero from '@/components/Hero'
import SearchManufacture from '@/components/SearchManufacture'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
  <Hero/>
  <div className='mt-12 padding-x padding-y max-width' id='discover'>
    <div className='home__text-container'>
      <h1 className='text-4xl font-extrabold'>
        Car Catalouge
      </h1>
      <p className=''>
Explore the Cars You want
      </p>

    </div>

<div className='home__filters'>
  {/* Search bar */}
  <Searchbar/>


<div className='home___filter-container'>
  {/* <SearchManufacture/> */}
  {/* <Customfilter title="fuel"/>
  <Customfilter title="year /> */}


</div>



</div>



  </div>
    </main>
  )
}
