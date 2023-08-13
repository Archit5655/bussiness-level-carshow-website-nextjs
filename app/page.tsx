import Carcard from "@/components/Carcard";
import Customfilter from "@/components/Customfilter";
import Hero from "@/components/Hero";
import SearchManufacture from "@/components/SearchManufacture";
import Searchbar from "@/components/Searchbar";
import { fetchcars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allcars = await fetchcars();

  // console.log(allcars);
  const isdataempty=!Array.isArray(allcars) ||allcars.length <1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p className="">Explore the Cars You want</p>
        </div>

        <div className="home__filters">
          {/* Search bar */}
          <Searchbar />

          <div className="home___filter-container">
            {/* <SearchManufacture/> */}
            {/* <Customfilter title="fuel"/>
  <Customfilter title="year /> */}
          </div>
        </div>
        {!isdataempty?(
          <section>
          <div className="home__cars-wrapper">
            {allcars?.map((car)=><Carcard car={car}  />)}

          </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold"> Oops no results!</h2>
            <p>{allcars?.message}</p>

          </div>
        )}



      </div>
    </main>
  );
}
