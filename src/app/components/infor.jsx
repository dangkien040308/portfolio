'use client'
import Link from "next/link"
import { useState } from "react"
import { FaAngleLeft ,FaAngleRight } from "react-icons/fa6"


export default function Infor() {
  const [firstActive, setFirstActive] = useState(false)
  return (
    
    <div className="text-slate-100 flex items-start justify-between">
    <div className="p-5 hover:opacity-70 cursor-pointer w-max flex items-center justify-between" onClick={() => setFirstActive(!firstActive)}>
       <span className="md:inline-block font-[700] text-2xl mr-4">About Me ?</span>
       <span className="inline-block">{!firstActive ? <FaAngleLeft /> : <FaAngleRight /> }</span>
    </div>

    <div className={"md:w-[60%] md:mx-auto transition-[0.5] " + (firstActive ? 'visible translate-x-0' : 'invisible -translate-x-[20px]') }>

       <div className="pt-5 md:grid md:grid-cols-2 md:grid-rows-1">
         <span className="md:inline-block mr-2">Full Name</span>
         <span>Dang Viet Kien</span>
       </div>

       <div className="pt-5 md:grid md:grid-cols-2 md:grid-rows-1">
         <span className="md:inline-block mr-2">Nick Name</span>
         <span>KenD</span>
       </div>
       <div className="pt-5 md:grid md:grid-cols-2 md:grid-rows-1">
         <span className="md:inline-block mr-2">Age</span>
         <span>16</span>
       </div>

       <div className="pt-5 md:grid md:grid-cols-2 md:grid-rows-1">
         <span className="md:inline-block mr-2">Favorite</span>
         <Link className="underline-offset-2 underline text-rose-400" href='/fav'>/fav</Link>
       </div>

       <div className="pt-5 md:grid md:grid-cols-2 md:grid-rows-1">
         <span>Character</span>
         <div className="md:inline-block">
            <span className="text-orange-400 font-[600] md:mr-2">funny</span>
            <span className="text-cyan-500 font-[600] md:mr-2">sociable</span>
            <span className="text-green-600 font-[600] md:mr-2">outward</span>
         </div>
       </div>

    </div>
   

  </div>
   
  )
}