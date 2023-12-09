import React, { useEffect, useState } from 'react'
import { Header, Body } from '../components'

const Homepage = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const readyPage=()=>{
      setLoading(true)
    }

    //ready document
    // document.addEventListener('readystatechange', readyPage);

    // return ()=>{
    //   document.removeEventListener('readystatechange', readyPage)
    // }
    if(document.readyState==='complete'){
      readyPage()
    }else{
      window.addEventListener('load', readyPage())
    }
    return()=>{
      window.removeEventListener('load', readyPage())
    }
  },[]);
  return (
    <div id='loading_area' className={`${loading ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-500 m-0 container mx-auto max-w-8xl px-6 lg:px-10 min-h-screen cursor-default overflow-x-auto bg-custom3 text-white font-Avenir-Heavy`}>
        <Header/>
        <Body/>
        {/* in a case a footer is required, import the footer component*/}
        {/* <Footer/> */}
    </div>
  )
}

export default Homepage