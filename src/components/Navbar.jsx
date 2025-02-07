import {motion} from "framer-motion"
function Navbar() {
  return (
<nav class = "mt-10">
    <ul class = 'w-50 xs:hidden md:flex flex-col '>
      <motion.a 
      initial = {{y: 50, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.4}}
      href = "#About" 
      class = 'relative group text-2xl'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500 p-1'>About</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></motion.a>
        <motion.a 
        initial = {{y: 50, opacity: 0}}
        whileInView = {{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay:0.5}}
        href = "#Work" 
        class = 'relative group text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500 text-2xl p-1'>Work</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></motion.a>
        <motion.a 
        initial = {{y: 50, opacity: 0}}
        whileInView = {{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay:0.6}}
        href = "#Education" 
        class = 'relative group text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500 text-2xl p-1'>Education</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></motion.a>
        <motion.a 
        initial = {{y: 50, opacity: 0}}
        whileInView = {{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay:0.7}}
        href = "#Skills" 
        class = 'relative group text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500 lg:text-2xl p-1'>Skills</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></motion.a>
        <motion.a 
        initial = {{y: 50, opacity: 0}}
        whileInView = {{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay:0.8}}
        href = "#Projects" 
        class = 'relative group text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500  text-2xl p-1'>Projects</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></motion.a>
    </ul>
</nav>
  )
}

export default Navbar