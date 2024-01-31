import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Cont } from '../../App'

export default function Cards({name,image,language,type,index}) {
  const data = useContext(Cont)
  const ref = useRef(null)
  return (
    <div className="bg-[#C5975E] w-[280px] h-[500px] border-0 rounded-xl hover:shadow-2xl m-[20px] ">
      <img className="w-full h-2/3 rounded-t-xl" src={image} alt={name} />
      <p className="text-2xl font-bold p-[5px]">{name}</p>
      <p className="text-lg pl-[5px]">{language}</p>
      <p className="text-lg pl-[5px]">{type}</p>
     <NavLink to={"/summary"} ><button id={index} ref={ref} onClick={()=>{data.setClick(ref.current.id)}} className="border-2 bg-[#F2A765] hover:bg-[#F9D271] w-[90%] ml-[5%] rounded-xl mt-[20px] font-bold ">See More</button></NavLink>
    </div>
  )
}
