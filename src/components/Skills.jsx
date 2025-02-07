import { TbBrandHtml5, TbBrandCss3, TbBrandTailwind,TbBrandJavascript,TbBrandReact,TbBrandGit, TbApi, TbSql } from "react-icons/tb";
import {motion} from "framer-motion"
const Skills = () => {
      return (
        <section id = 'Skills' className="p-5">
           <div class="flex-col justify-center items-center h-screen flex text-center mx-auto">
              <ul className="text-4xl flex flex-wrap items-center justify-center gap-10 w-80">
                <motion.li 
                 initial = {{x: -50, opacity: 0}}
                 whileInView = {{x: 0, opacity: 1}}
                 transition={{duration: 0.8, delay:0.1}}
                 id = 'Work' 
                className=""> <TbBrandHtml5/> </motion.li>
                <motion.li 
                initial = {{x: -50, opacity: 0}}
                whileInView = {{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.2}}
                className=""> <TbBrandCss3/> </motion.li>
                <motion.li 
                initial = {{x: 50, opacity: 0}}
                whileInView = {{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.1}}
                className=""> <TbBrandTailwind/> </motion.li>
                <motion.li 
                initial = {{x: 50, opacity: 0}}
                whileInView = {{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.2}}
                className=""> <TbBrandJavascript/> </motion.li>
                <motion.li 
                initial = {{x: -50, opacity: 0}}
                whileInView = {{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.3}}
                className=""> <TbBrandReact/> </motion.li>
                <motion.li 
                initial = {{x: -50, opacity: 0}}
                whileInView = {{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.4}}
                className=""> <TbBrandGit/> </motion.li>
                <motion.li 
                initial = {{x: 50, opacity: 0}}
                whileInView = {{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.3}}
                className=""> <TbApi/> </motion.li>
                <motion.li 
                initial = {{x: 50, opacity: 0}}
                whileInView = {{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.4}}
                className=""> <TbSql/> </motion.li>
              </ul>
              <motion.p 
              initial = {{opacity: 0}}
              whileInView = {{opacity: 1}}
              transition={{duration: 0.8, delay:0.5}}
              className="font-light text-zinc-300 text-center m-2">*but it's not the entire list</motion.p>
          </div>
        </section>
  )
}

export default Skills