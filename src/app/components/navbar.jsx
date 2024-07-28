'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const route = [
    {
      link : '/',
      name : 'Home'
    },
    {
      link : '/about',
      name : 'About'
    },
    {
      link : '/favorite',
      name : 'Favorite'
    },
    {
      link : '/contact',
      name : 'Contact'
    }
  ]

  const routeActive = usePathname()
  return (
    <div className="py-3 md:sticky z-10 md:top-0 bg-[rgba(0,0,0,.8)] backdrop-saturate-50 backdrop-blur md:border-b-[0.2px] md:border-[#fff] ">
      <nav className="md:flex md:items-center md:justify-between w-[80%] mx-auto">
        <span className="md:text-xl text-[#fff] italic font-[800]">KenD</span>
        <div className="text-sm md:flex md:items-center"> 
            {route.map((item) => {
              return (<Link className={"hover:text-[#faf8f8] text-[#9b9a9a] md:ml-12" + (item.link === routeActive ? ' text-[#faf8f8]' : '')}
                 href={item.link}
                 key={item.name} >
                  {item.name}</Link>)
            })}
        </div>
      </nav>
    </div>
  )
}