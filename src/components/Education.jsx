import {motion} from "framer-motion"
const Education = () => {
  return (
    <motion.section 
    initial = {{y: 50, x: 50, opacity: 0}}
    whileInView = {{y: 0, x:0, opacity: 1}}
    transition={{duration: 1, delay:0.3}}
    id = 'Education'
     className="">
      <div class="flex justify-center items-center relative h-screen max-w-150 mx-auto">
        <div className="ml-5">
      <span className="text-zinc-300 text-lg">2023</span>
      <div className="relative w-0.5 bg-black h-40 flex justify-center ml-5">
        <div className="absolute top-0 w-5 h-5 bg-white border-2 border-black  rounded-full"></div>
        <div className="absolute bottom-0 w-5 h-5 bg-white border-2 border-black rounded-full"></div>
      </div>
      <span className="text-zinc-300 text-lg">2017</span>
    </div>
    <div className="ml-15 w-150">
            <h1 className="font-semibold text-3xl xs:text-3xl">Computer Engineering (Bachelor's Degree)</h1>
            <h2 className="font-light text-zinc-400 xs:text-lg">KKNAU (Kryvyi Rih College of the National Aviation University)</h2>
            </div>
      </div>
    </motion.section>
  )
}

export default Education