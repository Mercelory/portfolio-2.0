const Education = () => {
  return (
    <section id = 'Education' className="inset-0 -z-10 h-screen w-full bg-[#F9F9F9] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div class="lg:flex justify-center items-center relative top-60 xs:w-sm mx-auto md:w-3xl xs:w-xs">
        <div className="m-2 xs:w-xs">
        <div class="relative flex items-center mb-2 xs:w-xs xs:justify-center">
        <span class="text-gray-700 text-xs mr-2">2025</span>
        <div class="relative flex-1 border-b border-black">
            <div class="absolute left-0 md:-top-2 md:w-4 md:h-4 bg-white border-2 border-black rounded-full xs:w-2 xs:h-2 xs:-top-1"></div>
        </div>
        <span class="text-gray-700 text-xs ml-2">current time</span>
    </div>
            <h1 className="font-semibold text-3xl xs:text-3xl">Technical Support Engineer</h1>
            <h2 className="font-light text-zinc-400 xs:text-lg">UniversalBank | 2025 - current time</h2>
        </div>
        <div>
          <div className="m-5 md:w-0.5 md:h-35 rounded bg-zinc-200 border-black xs:w-55 xs:h-0.5 xs:m-2"></div>
        </div>
        <div className="md:w-lg xs:w-xs">
          <p className="xs:text-lg m-2">I don't have commercial development experience unfortunately, but I do have a few projects and a lot of different experiences. 
          At my current job I work with logs and large databases.</p>
          </div>
      </div>
    </section>
  )
}

export default Education