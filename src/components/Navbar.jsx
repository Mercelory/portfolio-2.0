function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 text-black w-full">
      <div className="max-w-1/2 max-auto px-4 flex justify-center items-center h-16">
        <a className="border-2">
            Home
        </a>
        <a className="border-2">
            Work
        </a>
        <a className="border-2">
            Education
        </a>
        <a className="border-2">
            Skills
        </a>
        <a className="border-2">
            Projects
        </a>
        </div>
    </nav>
  )
}

export default Navbar