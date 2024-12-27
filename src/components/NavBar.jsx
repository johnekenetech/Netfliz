import { CircleX, Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="flex justify-between items-center mb-4 relative md:px-10">
      <Link to='/' className="font-bold text-2xl">Net<span className="text-blue-400">fliz</span></Link>
      <p onClick={() => setToggle(!toggle)} className="cursor-pointer xs:hidden">{toggle ? <CircleX /> : <Menu />}</p>
     
        {toggle && 
            <div className="z-10 absolute top-6 right-[1px] bg-blue-400 px-10 pt-5 h-[200px] font-bold sm:hidden">
                <div className="grid gap-2"> 
                    <Link to={'/'} className="text-lg hover:opacity-50" onClick={() => setToggle(false)}>Home</Link>
                    <Link to={'/favorites'} className="text-lg hover:opacity-50" onClick={() => setToggle(false)}>Favorites</Link>
                </div>
            </div>
        }
    
     
      <div className="hidden xs:flex gap-3 font-bold"> 
        <Link to={'/'} className="text-lg hover:opacity-50">Home</Link>
        <Link to={'/favorites'} className="text-lg hover:opacity-50">Favorites</Link>
      </div>
    </div>
  )
}

export default NavBar
