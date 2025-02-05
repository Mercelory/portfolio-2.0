function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 text-black w-full">
      <div className="w-full mx-auto px-15 flex justify-center items-center h-16">
        <a className="border-2 p-1 m-3">
            Home
        </a>
        <a className="border-2 p-1 m-3">
            Work
        </a>
        <a className="border-2 p-1 m-3">
            Education
        </a>
        <a className="border-2 p-1 m-3">
            Skills
        </a>
        <a className="border-2 p-1 m-3">
            Projects
        </a>
        </div>
    </nav>
  )
}

export default Navbar