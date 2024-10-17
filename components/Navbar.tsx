

const Navbar = () => {
  return (
    <nav className="py-5 px-16 fixed top-0 bg-transparent backdrop-blur-md">
       <div className="flex justify-between items-center gap-4">
       <img src="main.svg" className="w-8 h-8" alt="Logo" />
       <span>100xStore</span>
       </div>
    </nav>
  )
}

export default Navbar