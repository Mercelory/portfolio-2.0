import {motion} from "framer-motion"
const Work = () => {
  return (
    <section 
    id = 'Work' 
    className="p-5 max-w-150 h-screen">
      <div class="flex items-center h-screen">
        <motion.div
        initial = {{x: -50, x:50, opacity: 0}}
                whileInView = {{x: 0, x:0, opacity: 1}}
                transition={{duration: 1, delay:0.2}}
         className="">
    </motion.div>
    <div>
    <span className="text-zinc-300 text-lg -ml-5">now</span>
      <div className="relative w-0.5 bg-black h-40 flex justify-center">
        <div className="absolute bottom-0 w-5 h-5 bg-white border-2 border-black rounded-full"></div>
      </div>
      <span className="text-zinc-300 text-lg -ml-5">2025</span>
      </div>
    <div className="ml-5">
            <motion.h1 
                initial = {{x: -50, x:50, opacity: 0}}
                whileInView = {{x: 0, x:0, opacity: 1}}
                transition={{duration: 1, delay:0.2}}
            className="font-semibold  text-3xl">Technical Support Engineer</motion.h1>
            <motion.h2 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.3}}
            className="font-light text-zinc-400 text-lg">UniversalBank</motion.h2>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.3}}
            className="mt-3">At my current job I work with logs and large databases.</motion.p>
            <div className="flex max-w-100 h-12 flex-wrap  items-center">
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.4}}
            className="mt-5 border bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3">GrayLog</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.5}}
            className="mt-5 border bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3">Postman</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.6}}
            className="mt-5 border bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3">DBeaver</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.7}}
            className="mt-5 border bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3">Jira</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.8}}
            className="mt-5 border bg-zinc-400 text-white p-1 text-center rounded-lg text-xs">Confluence</motion.p>
            </div>
            </div>
      </div>
      
    </section>

  )
}

export default Work
