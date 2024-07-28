import Image from "next/image"
export default function Post({className}) {
    return (
      <div className={"bg-gray-100 md:p-10 md:flex md:items-center md:justify-between"}>
         <div className="md:w-[50%] md:pr-4">
           <span className="block text-neutral-950 md:text-4xl font-mono font-[700] mb-5">A boiz with dream to be a FullStack Developer</span>
           <span className="block">
           I started learning web development when I was a student in 9th grade. 
           It was very amazing for me, but because I was so lazy, after one year of learning, I only knew HTML, CSS, and JavaScript. 
           Because of that, I feel bad and disappointed in myself. I hope this will be a big lesson for me in the future to try my best to realize my dream
           </span>
         </div>
         <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-2 md:w-[50%]">
            <Image quality={100} className="rounded-md md:object-cover md:w-[100%] md:h-[100%] md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3" src='/code/1.jpg' height={400} width={500}  />
            <Image quality={100} className="rounded-md md:object-cover md:w-[100%] md:h-[100%] md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2" src='/code/2.png' height={400} width={500}  />
            <Image quality={100} className="rounded-md md:object-cover md:w-[100%] md:h-[100%] md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3" src='/code/3.png' height={400} width={500}  />
         </div>
          
       </div>
    )
}