import { TbBrandTelegram, TbBrandGithub, TbBrandLinkedin, TbMail, TbFileCv } from "react-icons/tb";

const Main = () => {
  return (
    <section class = 'mb-20'>
    <div className="">
    <ul class = 'flex justify-between items-center w-40 m-10 mb-3 mt-20'>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl"><a href = '#'><TbBrandTelegram /></a></li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl"><a href = '#'> <TbBrandGithub /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl"><a href = '#'> <TbBrandLinkedin /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl"><a href = '#'><TbMail /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-4xl md:text-2xl"><a href = '#'><TbFileCv /></a> </li>
    </ul>
      <h1 class = 'text-9xl ml-5 font-sora xs:text-4xl md:text-5xl lg:ml-10 font-semibold'>Tischenko Dmitriy</h1>
      <h2 class = 'text-zinc-400 ml-5 mb-5 text-2xl md:text-2xl lg:ml-10 font-light'>Web-Developer</h2>
    </div>
    </section>
  )
}

export default Main