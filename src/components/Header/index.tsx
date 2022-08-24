import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { icons } from "../../assets";
import { navigation } from "./navigationLinks";

export default function Header() {
  const [open, setOpen] = useState(true)
  const path = useLocation().pathname

  return (
    <header className="bg-primary py-2 flex px-6 justify-between">
      <div className="flex items-center">
        <img className="mx-1 p-1 bg-white rounded-full " src={icons.iconHamburguer} width={20} alt="Icone Fastfood" />
        <h1 className=" text-white font-extrabold">fastfood</h1>
      </div>
      <nav className="flex items-center">
        {/* Navigation for mobile */}
        <button
          className={`w-4 h-4 bg-contain absolute top-3 right-3 sm:hidden ${open ? "bg-icon-menu" : "bg-icon-close"}`}
          onClick={() => setOpen(!open)} />
        <div className={`flex flex-col content-around flex-1 sm:hidden bg-primary bg-opacity-90 rounded-bl-xl absolute w-4/5 top-10  py-20 duration-500 z-50 ${open ? "right-[-100%]" : "right-0"
          }`}>
          {navigation.map((link) => (
            <Link key={link.name}
              className={`mx-10 my-2 px-3 py-1 cursor-pointer text-white text-[10px] font-extrabold hover:bg-black hover:bg-opacity-30 rounded-md transition-colors ${path == link.redirect ? "bg-black bg-opacity-30" : ""}`}
              to={link.redirect}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Navigation for desktop */}
        <div className="hidden sm:block">
          {navigation.map((link) => (
            <Link key={link.name}
              className={`mx-10 px-3 py-1 cursor-pointer text-white text-[10px] font-extrabold hover:bg-black hover:bg-opacity-30 rounded-md transition-colors ${path == link.redirect ? "bg-black bg-opacity-30" : ""}`}
              to={link.redirect}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
