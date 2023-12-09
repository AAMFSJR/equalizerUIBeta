import React from 'react'

const Card2 = ({title, description}) => {
    // const icons = require('./../assets/images/Color logo - no background.png')
  return (
    <section className='lg:w-1/3  rounded-xl p-10' style={{backgroundColor:'#292929'}}>
        <section className='flex flex-col h-1/2'>
            <h3 className='text-2xl lg:text-xl font-semibold lg:font-bold my-4'>
                {title}
            </h3>
        </section>
            <div className='pt-5'>
                <p className='font-dmsans text-xl md:text-lg lg:text-base font-normal leading-6'>{description}</p>
            </div>
    </section>
  )
}

export default Card2