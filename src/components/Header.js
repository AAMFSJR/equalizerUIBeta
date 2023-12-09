import React from 'react'

const Header = () => {
    const logo = require('./../assets/images/White logo - no background.png')
    
  return (
    <nav className='flex justify-between  w-full pb-16'>
        <section className='flex justify-between w-1/3 items-center'>
            <figcaption className='border rounded-lg lg:px-8 px-1 lg:py-3 text-center text-base lg:text-xl font-semibold sm:w-full lg:w-fit border-white '>
              <a href='#documentation' className='bg-gradient-to-r from-custom6 to bg-custom5 bg-clip-text text-transparent'>Documentation (Soon)</a>
            </figcaption>
        </section>

    <nav className='flex-end  w-full pb-16'>
      <section className='flex-end'>
           <figcaption  className=' font-dmsans border border-custom1 rounded-lg px-1 lg:px-8 py-3 lg:py-3 text-center text-sm font-semibold sm:w-full lg:w-fit cursor-default select-none '>
              <button href='https://blocksurvey.io/equalizer-early-access-7t5z3OqVRC2YEFcUXu8HeA?v=o'>REQUEST BETA</button>
            </figcaption>
      </nav>
        </section>
            <figure className='w-7/12 pl-10 pt-32'>
                <img src={logo} alt='Logo' className=' block sm:w-28 w-20  md:w-28 lg:w-28 select-none'/>
            </figure>
    </nav>
  )
}

export default Header
