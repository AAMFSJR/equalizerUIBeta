import React from 'react'

const Card = ({icons, title, description}) => {
    // const icons = require('./../assets/images/Color logo - no background.png')
  return (
    <section className='flex flex-col rounded-xl lg:w-1/3 p-11' style={{backgroundColor:'#292929'}}>
        <section >
            <img src={icons} alt='icons' className=' select-none'/>
        </section>
        <section className=''>
            <div className=''>
                <h3 className='font-dmsans text-2xl lg:text-xl font-semibold lg:font-bold my-4'>
                    {title}
                </h3>
            </div>
            <div className='h-fit'>
                <p className='font-dmsans text-xl md:text-lg lg:text-base font-normal leading-6'>{description}</p>
            </div>
        </section>
    </section>
  )
}

export default Card