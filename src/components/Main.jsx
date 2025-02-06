import { TbBrandTelegram, TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Main = () => {
  return (
    <section class = ''>
    <div className="flex-col justify-between items-center top-50 left-0 relative md:top-70 lg:top-100">
    <ul class = 'flex justify-between items-center w-40 ml-5 mb-2 md:w-60 lg:ml-10'>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl md:text-5xl"><a href = '#'><TbBrandTelegram /></a></li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl md:text-5xl"><a href = '#'> <TbBrandGithub /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl md:text-5xl"><a href = '#'> <TbBrandLinkedin /></a> </li>
      <li className="hover:text-zinc-300 hover:transition-transform duration-500 text-3xl md:text-5xl"><a href = '#'><TbMail /></a> </li>
    </ul>
      <h1 class = 'text-9xl ml-5 font-sora xs:text-4xl md:text-7xl lg:ml-10 font-semibold'>Tischenko Dmitriy</h1>
      <h2 class = 'text-zinc-400 ml-5 mb-10 text-2xl md:text-4xl lg:ml-10 font-light'>Web-Developer</h2>
      <p class = 'text-lg ml-5 w-xs md:text-2xl md:w-md lg:w-4xl lg:ml-10'>My name is Dmitry, I am an actively developing web applications. 
        I have 3 completed projects and many different developments in my portfolio. 
        I am going on developing more and more all the time.</p>
    </div>
    </section>
  )
}

export default Main