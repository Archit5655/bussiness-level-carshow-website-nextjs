"use client"
import { showmoreprops } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from './Button'
import { updatesearchparams } from '@/utils'

const Showmore = ({pagenumber,isnext}:showmoreprops) => {
    const router=useRouter()
    const handlenavigatio=()=>{
        const newlimit=(pagenumber+1)*10
const newpathname=updatesearchparams("limit",`${newlimit}`)
router.push(newpathname,{scroll:false})
    }
  return (

<div className='w-full flex-center gap-6 mt-10'>
    {!isnext && (
        <Button title='Showmore' btnType='button' containerStyles='bg-primary-blue rounded-full text-white' handleClick={handlenavigatio} />
    )}

</div>


      
  
  )
}

export default Showmore
