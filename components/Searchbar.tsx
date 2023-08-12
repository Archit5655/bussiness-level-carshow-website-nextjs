"use client"

import { useState } from "react"
import SearchManufacture from "./SearchManufacture"
const Searchbar = () => {
    const handlesearch=()=>{}
    
    const [manufacturer, setmanufacturer] = useState('')

  return (


      <form className='searchbar' onSubmit={handlesearch}>

        <div className="searchbar__item">
            <SearchManufacture
            manufacturer={manufacturer}
            setmanufacturer={setmanufacturer}
            />

        </div>
      </form>

  )
}

export default Searchbar
