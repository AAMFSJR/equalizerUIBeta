import React from 'react'

const Header = () => {
    const logo = require('./../assets/images/White logo - no background.png')
    
  return (


      <>
      <nav className='flex justify-between  w-full pb-16'>
        <section className='flex justify-between w-1/3 items-center'>
            <figcaption className=' border rounded-lg lg:px-8 px-1 lg:py-3 text-center text-base lg:text-xl font-semibold sm:w-full lg:w-fit border-white '>
              <a href='https://blocksurvey.io/maji-early-access-dqn91xjKQi6ymmOeMXUrKQ?v=o' className='bg-gradient-to-r from-custom6 to bg-custom5 bg-clip-text text-transparent'>REQUEST BETA</a>
            </figcaption>

      <figure className='w-7/12 pl-10 pt-32'>
                <img src={logo} alt='Logo' className=' block sm:w-28 w-20  md:w-28 lg:w-28 select-none'/>
            </figure>
  
         </section>
     

            

          
     </nav>
     </>  

    

  )
}

export default Header
