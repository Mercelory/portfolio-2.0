import { TbBrandTelegram, TbBrandGithub, TbBrandLinkedin, TbMail, TbFileCv } from "react-icons/tb";
import {motion} from "framer-motion"
import ThemeToggle from './ThemeToggle'

const Main = () => {
  return (
    <section class = ''>
    <div className="flex flex-col">
    <motion.ul 
    initial = {{y: 50, opacity: 0}}
    whileInView = {{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay:0.1}}
    class = 'flex justify-between w-50 dark:text-neutral-200'>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl dark:hover:text-neutral-500"><a href = 'https://t.me/tisdm'><TbBrandTelegram /></a></li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl dark:hover:text-neutral-500"><a href = 'https://github.com/Mercelory'> <TbBrandGithub /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl dark:hover:text-neutral-500"><a href = 'https://www.linkedin.com/in/tischenko-dmitriy-068640267/'> <TbBrandLinkedin /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl dark:hover:text-neutral-500"><a href = 'mailto:tischenkodmitry01@gmail.com'><TbMail /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl dark:hover:text-neutral-500"><a href = '#'><TbFileCv /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl dark:hover:text-neutral-500"><ThemeToggle/></li>
    </motion.ul>
      <motion.h1 
      initial = {{y: 50, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.2}}
      class = 'text-4xl font-semibold mt-2 dark:text-neutral-200'>Tischenko Dmitriy</motion.h1>
      <motion.h2 
      initial = {{y: 50, opacity: 0}}
      whileInView = {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.3}}
      class = 'text-zinc-400 text-2xl font-light dark:text-neutral-500'>Web-Developer</motion.h2>
    </div>
    </section>
  )
}

export default Main