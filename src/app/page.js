import { Spotlight } from "@/components/ui/spotlight"
import Image from "next/image"
import Post from "./components/post"
import CardGroup from "./components/cardGroup/cardgroup";
export default function Home() {
  return (
    <div className="md:h-screen ">
        <Spotlight
        className="left-[250px] top-[250px]"
        fill="white"
       />
       <div className="md:flex md:items-center md:justify-center md:mt-10 p-5 font-mono">
         <Image height={400} width={500} quality={100} src='/me/16.png' className="brightness-110 md:w-[500px] md:h-[600px] md:object-cover" />
         <div className="">
           <span className="uppercase md:block md:font-[700] md:text-[80px] text-[#fff]">Dang</span>
           <span className="uppercase md:block md:mt-[-55px] md:font-[700] md:text-[80px] text-[#fff]">Viet</span>
           <span className="uppercase md:block md:mt-[-55px] md:font-[700] md:text-[80px] text-[#fff]">Kien</span>
           <span className="md:italic font-[600] md:text-[20px] text-slate-200">_a son of Tay Nguyen :&#62;</span>
         </div>
       </div>

       <Post />
       <div className="p-5 bg-gray-200 flex items-center justify-center">
         <CardGroup />
       </div>
    </div>
  );
}
