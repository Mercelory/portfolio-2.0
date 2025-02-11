import {motion} from "framer-motion"
const About = () => {
  return (
         <motion.section 
         initial = {{y: 50, x:50, opacity: 0}}
         whileInView = {{y: 0, x:0, opacity: 1}}
         transition={{duration: 0.5, delay:0.3}}
         id = 'About' 
         className="mb-65 flex flex-col items-center max-w-150 text-xl dark:text-neutral-200">
         <p className="mt-2"><span className="ml-2">Hi,</span> my name is <span className="font-semibold bg-black text-white dark:text-neutral-800 dark:bg-neutral-200">Dmitriy</span>, and I am deeply involved in <span className="font-semibold bg-black text-white dark:text-neutral-800 dark:bg-neutral-200">front-en</span> development. I have successfully completed three pet projects, along with numerous smaller developments that have helped me refine my skills.</p>
         <p className="mt-2"><span className="ml-2">My</span> approach combines clean, efficient code with a keen eye for design, as I actively practice <span className="font-semibold bg-black text-white dark:text-neutral-800 dark:bg-neutral-200">UI/UX</span> principles to enhance user experience in addition to front-end development.</p>
         <p className="mt-2"><span className="ml-2">I</span> have prior experience working with C++ and assembler during my college years, where I wrote coursework on these languages. However, I quickly realized that low-level programming wasn’t my passion, which led me to focus on the creative and interactive aspects of web development.</p>
        </motion.section>
  )
}

export default About