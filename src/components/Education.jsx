const Education = () => {
  return (
    <section id = 'Education' className="">
      <div class="lg:flex justify-center items-center xs:w-sm mx-auto md:w-3xl relative h-[600px] flex">
        <div className="m-2 xs:w-xs">
        <div class="relative flex items-center mb-2 xs:w-xs xs:justify-center">
        <span class="text-gray-700 text-xs mr-2">2017</span>
        <div class="relative flex-1 border-b border-black">
            <div class="absolute left-0 md:-top-2 md:w-4 md:h-4 bg-white border-2 border-black rounded-full xs:w-2 xs:h-2 xs:-top-1"></div>
        </div>
        <span class="text-gray-700 text-xs ml-2">2023</span>
    </div>
            <h1 className="font-semibold text-3xl xs:text-3xl">Computer Engineering (Bachelor's Degree)</h1>
            <h2 className="font-light text-zinc-400 xs:text-lg">KKNAU (Kryvyi Rih College of the National Aviation University)</h2>
        </div>
        <div>
          <div className="m-5 md:w-0.5 md:h-35 rounded bg-zinc-200 border-black xs:w-55 xs:h-0.5 xs:m-2"></div>
        </div>
        <div className="md:w-lg xs:w-xs">
          <p className="xs:text-lg m-2">In college I used mostly C++ to write coursework, one of which used C++ and Assembler. But all of this was far from appealing to me. But in one of the courses we started to go through web development, which interested me a lot and I started to get into it on my own</p>
          </div>
      </div>
    </section>
  )
}

export default Education