import { TbBrandTelegram, TbBrandGithub, TbBrandLinkedin, TbMail, TbFileCv } from "react-icons/tb";
import {motion} from "framer-motion"
const Main = () => {
  return (
    <section class = 'md:mb-20 xs:mb-3 xs:w-90 md:min-w-400'>
    <div className=" flex flex-wrap xs:ml-5 md:m-0 md:block">
    <motion.ul 
    initial = {{y: 50, opacity: 0}}
    whileInView = {{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay:0.1}}
    class = 'flex m-10 mb-3 mt-20 xs:ml-5 md:ml-10'>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl xs:text-2xl mr-3"><a href = '#'><TbBrandTelegram /></a></li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl xs:text-2xl mr-3"><a href = '#'> <TbBrandGithub /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl xs:text-2xl mr-3"><a href = '#'> <TbBrandLinkedin /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl xs:text-2xl mr-3"><a href = '#'><TbMail /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl xs:text-2xl mr-3"><a href = '#'><TbFileCv /></a> </li>
    </motion.ul>
      <motion.h1 
      initial = {{y: 50, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.2}}
      class = 'ml-5 xs:text-3xl md:text-5xl lg:ml-10 font-semibold'>Tischenko Dmitriy</motion.h1>
      <motion.h2 
      initial = {{y: 50, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.3}}
      class = 'text-zinc-400 ml-5 mb-5 md:text-2xl lg:ml-10 font-light'>Web-Developer</motion.h2>
    </div>
    </section>
  )
}

export default Main