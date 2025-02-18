import {motion} from "framer-motion"
const Work = () => {
  return (
    <section 
    id = 'Work' 
    className="max-w-150 mb-65">
      <div class="flex items-center ">
        <motion.div
        initial = {{x: -50, x:50, opacity: 0}}
                whileInView = {{x: 0, x:0, opacity: 1}}
                transition={{duration: 1, delay:0.2}}
         className="">
    </motion.div>
    <div>
    <span className="text-zinc-300 text-lg -ml-5 dark:text-neutral-500">now</span>
      <div className="relative w-0.5 bg-neutral-600 h-40 flex justify-center dark:bg-neutral-300">
        <div className="absolute bottom-0 w-5 h-5 bg-neutral-600 border-black rounded-full dark:bg-neutral-300"></div>
      </div>
      <span className="text-zinc-300 text-lg -ml-5 dark:text-neutral-500">2025</span>
      </div>
    <div className="ml-5">
            <motion.h1 
                initial = {{x: -50, x:50, opacity: 0}}
                whileInView = {{x: 0, x:0, opacity: 1}}
                transition={{duration: 1, delay:0.2}}
            className="font-semibold  text-3xl dark:text-neutral-200">Technical Support Engineer</motion.h1>
            <motion.h2 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.3}}
            className="font-light text-zinc-400 text-lg dark:text-neutral-500">UniversalBank</motion.h2>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.3}}
            className="mt-3 dark:text-neutral-200">As a Technical Support Engineer, I specialize in analyzing system logs and working with extensive databases to identify and resolve technical issues efficiently. My role involves troubleshooting complex data-related problems, optimizing queries, and ensuring seamless data integrity across systems. By leveraging analytical skills and technical expertise, I contribute to maintaining high system performance and improving user experience.</motion.p>
            <div className="flex max-w-100 h-12 flex-wrap  items-center">
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.4}}
            className="mt-5  bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3 dark:text-neutral-800 dark:bg-neutral-300">GrayLog</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.5}}
            className="mt-5  bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3 dark:text-neutral-800 dark:bg-neutral-300">Postman</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.6}}
            className="mt-5  bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3 dark:text-neutral-800 dark:bg-neutral-300">DBeaver</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.7}}
            className="mt-5  bg-zinc-400 text-white p-1 text-center rounded-lg text-xs mr-3 dark:text-neutral-800 dark:bg-neutral-300">Jira</motion.p>
            <motion.p 
            initial = {{x: -50, x:50, opacity: 0}}
            whileInView = {{x: 0, x:0, opacity: 1}}
            transition={{duration: 1, delay:0.8}}
            className="mt-5  bg-zinc-400 text-white p-1 text-center rounded-lg text-xs dark:text-neutral-800 dark:bg-neutral-300">Confluence</motion.p>
            </div>
            </div>
      </div>
      
    </section>

  )
}

export default Work
