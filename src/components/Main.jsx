import { TbBrandTelegram, TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const Main = () => {
  return (
    <section class = ''>
    <div className="flex-col justify-between w-9xl bottom-100 left-0 absolute mx-5">
    <ul class = 'flex justify-between items-center w-80 h-10 ml-5 mb-5'>
      <li className="text-5xl hover:text-zinc-300 hover:transition-transform duration-500"><a href = '#'><TbBrandTelegram /></a></li>
      <li className="text-5xl text-3xl hover:text-zinc-300 hover:transition-transform duration-500"><a href = '#'> <TbBrandGithub /></a> </li>
      <li className="text-5xl text-3xl hover:text-zinc-300 hover:transition-transform duration-500"><a href = '#'> <TbBrandLinkedin /></a> </li>
      <li className="text-5xl text-3xl hover:text-zinc-300 hover:transition-transform duration-500"><a href = '#'><TbMail /></a> </li>
    </ul>
      <h1 class = 'text-9xl ml-5 font-sora'>Tischenko Dmitriy</h1>
      <h2 class = 'text-4xl text-zinc-400 ml-10 mb-10'>Web-Developer</h2>
      <p class = 'text-2xl ml-10 w-xl'>My name is Dmitry, I am an actively developing web applications. 
        I have 3 completed projects and many different developments in my portfolio. 
        I am going on developing more and more all the time.</p>
    </div>
    </section>
  )
}

export default Main