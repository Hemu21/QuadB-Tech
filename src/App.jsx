import { BrowserRouter, Route, Routes } from "react-router-dom"
import Screen1 from "./components/Screen1/Screen1"
import Screen2 from "./components/Screen2/Screen2"
import { Suspense, createContext, useEffect, useState } from "react"
import {RingLoader} from "react-spinners"

const Cont = createContext()
function App() {
  const [click,setClick] = useState(null)
  const [data,setData] = useState();
  const [loading,setLoading] = useState();
  useEffect(()=>{
    setLoading(true);
    const getData = async ()=>{
        const _data = await fetch("https://api.tvmaze.com/search/shows?q=all")
        if(_data.ok){
           const res = await _data.json()
           setData(res)
           setLoading(false)
        }

    }    
    getData();
  },[])
  return (
    <Cont.Provider value={{click,setClick,data,setData}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<RingLoader color="green" size={250} />}><Screen1 /></Suspense>} />
        <Route path="/summary" element={<Suspense fallback={<RingLoader color="green" size={250} />}><Screen2 /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </Cont.Provider>
  )
}

export default App
export {Cont}