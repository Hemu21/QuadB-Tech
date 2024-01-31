import React, { useContext, useEffect, useState } from 'react'
import { Cont } from '../../App';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Screen2() {
  const [data,setData] = useState();
  const conte = useContext(Cont);
  const [book,setBook] = useState(false);
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");
  const [summary,setSummary] = useState("");
  const [tickets,setTickets] = useState(0);
  const store = ()=>{
    localStorage.setItem("Name",name);
    localStorage.setItem("Mail",mail);
    localStorage.setItem("Tickets",tickets);
  }
  useEffect(()=>{
    const getData = async () => {
        const _data = await fetch("https://api.tvmaze.com/search/shows?q=all")
        if(_data.ok){
           const res = await _data.json()
           conte.click && setData(res[conte.click])
           conte.click && setSummary(new DOMParser().parseFromString(res[conte.click].show.summary, "text/html").body.innerText);
           
        }
    }    
    getData();
    if(localStorage.length>0){
        setName(localStorage.getItem("Name"));
        setMail(localStorage.getItem("Mail"));
        setTickets(localStorage.getItem("Tickets"));
    }
  },[])
  
  return (
    <>
    <Header />
    <div className="w-[80%] lg:w-[65%] m-auto relative flex-col mt-[20px] justify-center text-center flex p-[50px]">
        {data && <img className="m-auto h-[400px] w-[300px] rounded-lg" src={data.show.image?.original} />}
        {data && <p className="text-2xl font-bold p-[5px]">{data.show.name}</p>}
        {data && <p className="text-lg pl-[5px]">{data.show.language}</p>}
        {data && <p className="text-lg pl-[5px]">{data.show.type}</p>}
        {data && <p className="text-lg">{summary}</p> }
        {data && <button onClick={()=>book===false?setBook(true):setBook(false)} className=" bg-[#7CB342] hover:bg-[#568A31] h-[50px] w-full rounded-xl mt-[20px] font-bold ">Book Now</button>}
    </div>
    <div>
    <Footer />
    {book && <div className="absolute bg-white justify-center rounded-lg min-w-[250px] top-[30px] left-[50%] w-1/2 m-auto -translate-x-1/2">
            <form className="flex flex-col justify-center">
                {data && <img className="m-0 w-full rounded-lg" src={data.show.image?.original} />}
                {data && <p className="text-2xl text-center font-bold p-[5px]">{data.show.name}</p>}
                {data && <p className="text-lg text-center pl-[5px]">{data.show.language}</p>}
                <div className="flex mt-[15px] mr-[10px] justify-center">
                    <p className="text-lg pl-[10px]">Your Name:</p>
                    <input className="border-2 border-black rounded-lg ml-[10px] mt-[3px] " type='text' value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="flex mt-[15px] mr-[10px] justify-center">
                    <p className="text-lg pl-[10px]">Your Gmail:</p>
                    <input className="border-2 border-black rounded-lg ml-[10px] " type='email' value={mail} onChange={(e)=>setMail(e.target.value)} />
                </div>
                <div className="flex mt-[15px] mr-[10px] justify-center">
                    <p className="text-base pl-[10px]">No.of Tickets:</p>
                    <input className="border-2 border-black rounded-lg ml-[7px] mt-[3px] " type='number' value={tickets} onChange={(e)=>setTickets(e.target.value)} />
                </div>
               <NavLink to={"/"} className={"w-[75%] m-auto"} ><button onClick={()=>store()} className=" bg-[#7CB342] hover:bg-[#568A31] h-[50px] w-full rounded-xl mt-[20px] font-bold ">Confirm</button></NavLink>
            </form> 
            <br/>
        </div>}
        </div>
    
    </>
  )
}

// index={i} name={} language={} type={}}