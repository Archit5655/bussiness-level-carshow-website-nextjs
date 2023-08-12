import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
   <header className='w-full absolute z-10'>
    <nav className='maz-w-[1440] mx-auto flex justify-between items-center sm:=x-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-baseline'>
            <Image src="/logo.svg" alt='logo' width={118} height={18} className='object-contain'/> </Link>
            <Button title='Sign-in'
            btnType='button'
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            

            />

    </nav>
   </header>
  )
}

export default Navbar
