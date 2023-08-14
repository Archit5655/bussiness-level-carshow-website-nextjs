"use client"

import { useState } from "react"
import SearchManufacture from "./SearchManufacture"
import Image from "next/image"
import { useRouter } from "next/navigation"
const Searchbutton=({otherclasses}:{otherclasses:string})=>(
  <button type="submit"  className={`-ml-3 z-10 ${otherclasses}`}>

<Image src="/magnifying-glass.svg" alt="glass"
width={45} height={45}   />

  </button>
)
const Searchbar = () => {
  const [manufacturer, setmanufacturer] = useState('')
  const [model, setmodel] = useState('');
  const router=useRouter()

    const updatesearchparams=(model:string,manufacturer:string)=>{
      const searchParams =new URLSearchParams(window.location.search)
      if(model){
        searchParams.set('model',model)
      }
      else{
        searchParams.delete(model)

      }
      if(manufacturer){
        searchParams.set('manufacturer',manufacturer)
      }
      else{
        searchParams.delete(manufacturer)

      }
      const newpathname=  `${window.location.pathname}?${searchParams.toString()}`
      router.push(newpathname,{scroll:false})

    }
    const handlesearch=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(manufacturer==='' && model===''){
        return alert("Plese fill the search bar")
      }
      updatesearchparams(model.toLowerCase(),manufacturer.toLowerCase())

    }
    


  return (


      <form className='searchbar' onSubmit={handlesearch}>

        <div className="searchbar__item">
            <SearchManufacture
            manufacturer={manufacturer}
            setmanufacturer={setmanufacturer}
            />
            <Searchbutton otherclasses="sm:hidden" />

        </div>
        <div className="searchbar__item">
          <Image src="/model-icon.png" alt="icon"  
          width={30}
          height={30}
          className="absolute w-[20px] h-[20px] ml-4"
          />
<input type="text" name="model" onChange={(e)=>setmodel(e.target.value)} value={model} placeholder="Enter Model" className="searchbar__input" />
<Searchbutton otherclasses="sm:hidden"/>

        </div>
<Searchbutton otherclasses="max-sm:hidden"/>
      </form>

  )
}

export default Searchbar
