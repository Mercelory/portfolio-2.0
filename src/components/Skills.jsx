import { TbBrandHtml5, TbBrandCss3, TbBrandTailwind,TbBrandJavascript,TbBrandReact,TbBrandGit, TbApi, TbSql } from "react-icons/tb";

const Skills = () => {
      return (
        <section id = 'Skills' className="inset-0 -z-10 h-screen w-full bg-[#F9F9F9] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
           <div class="relative top-60 xs:w-60 flex-col justify-center items-center mx-auto">
              <ul className="text-4xl flex flex-wrap items-center justify-center gap-8 ">
                <li className=""> <TbBrandHtml5/> </li>
                <li className=""> <TbBrandCss3/> </li>
                <li className=""> <TbBrandTailwind/> </li>
                <li className=""> <TbBrandJavascript/> </li>
                <li className=""> <TbBrandReact/> </li>
                <li className=""> <TbBrandGit/> </li>
                <li className=""> <TbApi/> </li>
                <li className=""> <TbSql/> </li>
              </ul>
              <p className="font-light text-zinc-400 text-center m-2">*but it's not the entire list</p>
          </div>
        </section>
  )
}

export default Skills