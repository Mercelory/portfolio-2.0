import {motion} from "framer-motion"
const About = () => {
  return (
         <motion.section 
         initial = {{y: 50, x:50, opacity: 0}}
         whileInView = {{y: 0, x:0, opacity: 1}}
         transition={{duration: 0.5, delay:0.3}}
         id = 'About' 
         className="mt-15 relative ml-10 h-screen flex justify-center items-center max-w-150">
         <p class = 'text-lg '>Hi, my name is <span className="font-semibold bg-black text-white">Dmitriy</span>, I am actively engaged in <span className="font-semibold bg-black text-white">front-end development</span>, 
         having in my portfolio 3 completed pet-projects, 
         as well as many different developments.
<br className=""/>I am also practicing in <span className="font-semibold bg-black text-white">design</span>. <br />Earlier, in college, I wrote coursework in C++ and assembler, but to be honest, I didn't like it at all.</p>
        </motion.section>
  )
}

export default About