import { TbBrandTelegram, TbBrandGithub, TbBrandLinkedin, TbMail, TbFileCv } from "react-icons/tb";
import {motion} from "framer-motion"


const Main = () => {
  return (
    <section class = 'pt-25'>
    <div className="flex flex-col">
    <motion.ul 
    initial = {{y: 50, opacity: 0}}
    whileInView = {{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay:0.1}}
    class = 'flex justify-between w-40'>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-2xl"><a href = '#'><TbBrandTelegram /></a></li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-2xl"><a href = 'https://github.com/Mercelory'> <TbBrandGithub /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-2xl"><a href = '#'> <TbBrandLinkedin /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-2xl"><a href = '#'><TbMail /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-2xl"><a href = '#'><TbFileCv /></a> </li>
    </motion.ul>
      <motion.h1 
      initial = {{y: 50, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.2}}
      class = 'text-5xl font-semibold mt-2'>Tischenko Dmitriy</motion.h1>
      <motion.h2 
      initial = {{y: 50, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.3}}
      class = 'text-zinc-400 text-2xl font-light'>Web-Developer</motion.h2>
    </div>
    </section>
  )
}

export default Main