function Navbar() {
  return (
<nav class = "fixed left-0 bottom-0 w-full h-10">
    <ul class = 'flex justify-center items-center mx-auto '>
      <a class = 'relative group mx-1 px-2 border '>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500'>Home</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a class = 'relative group mx-1 px-2 border '>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500'>Work</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a class = 'relative group mx-1 px-2 border '>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500'>Education</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a class = 'relative group mx-1 px-2 border '>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500'>Skills</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a class = 'relative group mx-1 px-2 border '>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500'>Projects</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
    </ul>
</nav>
  )
}

export default Navbar