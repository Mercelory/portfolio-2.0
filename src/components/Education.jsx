import {motion} from "framer-motion"
const Education = () => {
  return (
    <section
    id = 'Education'
     className="h-screen max-w-150 p-5">
      <div class="flex items-center h-screen">
        <motion.div
        initial = {{x: -50, x:50, opacity: 0}}
                whileInView = {{x: 0, x:0, opacity: 1}}
                transition={{duration: 1, delay:0.2}}
         className="">
      <span className="text-zinc-300 text-lg -ml-5">2023</span>
      <div className="relative w-0.5 bg-black h-40 flex justify-center">
        <div className="absolute bottom-0 w-5 h-5 bg-white border-2 border-black rounded-full"></div>
        <div className="absolute top-0 w-5 h-5 bg-white border-2 border-black rounded-full"></div>
      </div>
      <span className="text-zinc-300 text-lg -ml-5">2017</span>
    </motion.div>
    <div className="ml-5">
            <motion.h1 
                initial = {{x: -50, x:50, opacity: 0}}
                whileInView = {{x: 0, x:0, opacity: 1}}
                transition={{duration: 1, delay:0.2}}
            className="font-semibold text-3xl">Computer Engineering (Bachelor's Degree)</motion.h1>
            <motion.h2 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.3}}
            className="font-light text-zinc-400 text-lg">KKNAU (Kryvyi Rih College of the National Aviation University)</motion.h2>
            </div>
      </div>
    </section>
  )
}

export default Education