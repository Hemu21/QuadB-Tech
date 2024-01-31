import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import { Cont } from '../../App'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Screen1() {
  const {data} = useContext(Cont)
  
  return (
    <>
    <Header />
    <div className="w-[95%] h-full flex-wrap justify-center lg:justify-normal m-auto flex p-[50px]">
        {data&&data.map((dat,i)=> <Cards key={i} image={dat.show.image?.original} index={i} name={dat.show.name} language={dat.show.language} type={dat.show.type} /> ) }
    </div>
    <Footer />
    </>
  )
}