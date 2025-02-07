const Work = () => {
  return (
    <section id = 'Work' className="">
      <div class="flex justify-center items-center relative h-[600px]">
        <div className="">
      <span className="text-zinc-300 text-lg -ml-13">current time</span>
      <div className="relative w-0.5 bg-black h-40 flex justify-center">
        <div className="absolute bottom-0 w-5 h-5 bg-white border-2 border-black rounded-full"></div>
      </div>
      <span className="text-zinc-300 text-lg -ml-5">2025</span>
    </div>
    <div className="w-150 ml-15">
            <h1 className="font-semibold text-3xl xs:text-3xl">Technical Support Engineer</h1>
            <h2 className="font-light text-zinc-400 xs:text-lg">UniversalBank | 2025 - current time</h2>
            <p className="mt-3">At my current job I work with logs and large databases.</p>
            <div className="flex w-100 h-12 ">
            <p className="mt-5 border bg-zinc-200 text-white p-1 text-center rounded-lg text-xs mr-3">GrayLog</p>
            <p className="mt-5 border bg-zinc-200 text-white p-1 text-center rounded-lg text-xs mr-3">Postman</p>
            <p className="mt-5 border bg-zinc-200 text-white p-1 text-center rounded-lg text-xs mr-3">DBeaver</p>
            <p className="mt-5 border bg-zinc-200 text-white p-1 text-center rounded-lg text-xs mr-3">Jira</p>
            <p className="mt-5 border bg-zinc-200 text-white p-1 text-center rounded-lg text-xs">Confluence</p>
            </div>
            </div>
      </div>
      
    </section>

  )
}

export default Work
