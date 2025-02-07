function Navbar() {
  return (
<nav class = "">
    <ul class = 'flex flex-col m-10 w-30'>
      <a href = "#About" class = 'relative group px-2 border xs:text-sm sm:mr-3 sm:text-lg lg:text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500'>About</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a href = "#Work" class = 'relative group px-2 border xs:text-sm sm:mr-3 sm:text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500 '>Work</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a href = "#Education" class = 'relative group px-2 border xs:text-sm sm:mr-3 sm:text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500 '>Education</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a href = "#Skills" class = 'relative group px-2 border xs:text-sm sm:mr-3 sm:text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500 '>Skills</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
        <a href = "#Projects" class = 'relative group px-2 border xs:text-sm sm:mr-3 sm:text-lg'>
        <span class = 'z-10 relative group-hover:text-white transition-transform duration-500  '>Projects</span>
        <span class = 'z-9 absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom'></span></a>
    </ul>
</nav>
  )
}

export default Navbar