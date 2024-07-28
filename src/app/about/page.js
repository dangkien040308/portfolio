import Image from "next/image";
import Infor from "../components/infor";


export default function About() {

  return (
    <div className="md:px-[40px] md:py-[70px] ">
      <div className="md:p-4 md:flex md:items-start md:justify-center bg-[#1f1e1e] md:rounded-2xl">
         <Image src='/avartar.jpg' height={100} quality={100} width={100} className="rounded-full md:w-[300px] md:h-[300px] object-cover md:mr-[100px]" />
         <Infor />
      </div>
      <div className="mt-[70px]">
        <span className="text-stone-300 text-3xl font-[700]">Images about me</span>

        <div className="px-10 mt-12">
           <span className="text-2xl text-slate-300">Just me</span>
           <div>

           </div>
        </div>

      </div>

    </div>
  )
}