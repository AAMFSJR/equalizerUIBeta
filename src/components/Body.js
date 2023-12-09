import React from 'react'
import Card from './Card'
import Card2 from './Card2'

const Body = () => {
    const sup = require('./../assets/images/Color logo with background (1).png')
    const icon1 = require('./../assets/images/Component 1.png')
    const icon2 = require('./../assets/images/image 1 (2).png')
    const icon3 = require('./../assets/images/image 2.png')
    const icon4 = require('./../assets/images/image 3.png')
    const icon5 = require('./../assets/images/Component 2.png')
    const icon6 = require('./../assets/images/Ornament 43.png')
  return (
    <section className='m-0 ' >
        <section className='pb-6 m-0'>
            <div className='m-0 flex items-center justify-center'>
                <h2 className=' sm:leading-5 text-5xl lg:text-8xl font-medium tracking-tight pr-5 lg:pr-10 m-0'>
                    Introducing
                    <span>
                        <span className='  bg-gradient-to-r from-custom6 to bg-custom5 bg-clip-text text-transparent'> Equalizer</span>
                    </span>
                </h2>
                            <img src={sup} alt='sup logo' className='rounded-md w-8 lg:w-10 '/>
            </div>
            <h3 className=' my-5 lg:py-4 lg:font-semibold lg:text-xl m-0 text-xl font-medium'>
                A multichain and cross-chain Web3 Native Revenue-Based Financing protocol enabling Web3 businesses to turn their recurring revenue streams into upfront capital.            
            </h3>
        </section>
        <section className='flex flex-col lg:flex-row gap-[1.5rem] items-stretch pb-4'>
            <Card icons={icon1}
                title={'Web3 capital platform.'} 
                description={'Allowing you to grow on your terms. Equalizer transforms future revenue streams into up-front growth capital for your Web3 business across chains.'}
            />
            <Card icons={icon2}
                title={'Working capital that works for you.'}
                description={'Now you can access capital when you need it the most across chains. Equalizer is built with small and mid-sized Web3 businesses in mind.'}
            />
            <Card icons={icon3}
                title={"Scale"}
                description={"Built to scale as your Web3 business grows by setting up streams or cross-chain streams for your recurring revenue, such as subscription payments."}
            />
        </section>
        <section className='flex flex-col lg:flex-row gap-[1.5rem] items-stretch py-10 pb-32'>
            
            <Card icons={icon4}
                title={'Access instant financing'} 
                description={'Convert your Web3 revenue into working capital with a few clicks.'}
            />
            <Card icons={icon5}
                title={'Operate with ease.'}
                description={'Financing on autopilot so you can focus on running your business.'}
            />
            <Card icons={icon6}
                title={"Censorship Resistant"}
                description={"Equalizer is a trustless, full decentralized and highly secure protocol."}
            />
        </section>
        <section className='flex flex-col justify-center items-center py-10 pt-28'>
                <h1 className='text-center font-medium text-5xl pb-10  text-custom6'>
                    INVESTORS
                </h1>
            <div className='bg-custom4 rounded-xl space-y-6 pt-10'>
                <div className='text-center space-y-6'>
                    <h1 className='sm:leading-5 text-2xl lg:text-4xl font-medium  m-0 py-2 lg:pt-4 px-10 lg:px-16'>
                        Invest in a new untapped asset class power by Web3 real-time finance.
                    </h1>
                    <div className='w-full px-16'>
                        <hr/>
                    </div>
                    <h3 className='font-normal text-xl py-7'>
                        Harness the stability of recurring revenue streams in real-time and diversify in the Web3 industry.
                    </h3>
                </div>
            </div>
            <div className='w-full pt-10'>

            </div>
            <div className='w-full p-16'>
                        <hr/>
                    </div>

            <section className='flex flex-col lg:flex-row gap-[1.5rem] items-stretch'>
            
                <Card2 
                    title={'Diversify your portfolio'} 
                    description={'Purchase the revenue streams that fit your investment objectives with criteria selection and risk profiling across chains.'}
                />
                <Card2
                    title={'Set your criteria and invest on your terms'}
                    description={'Let us know your target risk profile and we\'ll take care of the rest.'}
                />
                <Card2
                    title={"Run your portfolio on autopilot"}
                    description={"Service your investments automatically, while you track performance in your dashboard."}
                />

                        
            </section>
        </section>

          
<div className='pt-10 mb-10 flex items-center justify-center'>
                  <figcaption >
               <button  href=:'https://blocksurvey.io/equalizer-early-access-7t5z3OqVRC2YEFcUXu8HeA?v=o'  className='border rounded-2xl px-8 py-5 text-center text-xl font-semibold sm:w-full lg:w-fit border-white bg-gradient-to-r from-custom6 to bg-custom5 bg-clip-text text-transparent'>
               REQUEST BETA
                </button>
                 </figcaption>
        </div>    

        
    </section>
  )
}

export default Body
