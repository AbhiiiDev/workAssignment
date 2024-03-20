import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen,setIsOpen]=useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 10); // Show navbar only when at the top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  let Links = [
    { name: "SHOP", link: "/" },
    { name: "CONSULTATION", link: "/" },
    { name: "RESOURCES", link: "/" },
    { name: "MEMBERSHIP", link: "/" },
    { name: "ABOUT", link: "/" },
  ];

const handleClick=()=>{
setIsOpen(!isOpen)
}

  return (
    <nav
    className={`w-full bg-transparent fixed border-b-2 border-gray-300 ${
      visible ? "top-0" : "-top-40"
    }`}
  >


    <div className="bg-transparent md:px-10 flex justify-evenly py-10 p-3">
      <div>
        <span className="font-bold text-white">Logo</span>
      </div>


      {/* For mobile and tablet screens */}

      <div className="lg:hidden ml-auto relative">
{ !isOpen ? <RxHamburgerMenu color="white" className="cursor-pointer" size={30} onClick={handleClick} /> :
<RxCross2 color="white" className="cursor-pointer" size={30} onClick={handleClick}/>
}
     { isOpen &&  <ul className="absolute flex flex-col gap-4 text-white right-0 w-[250px] opacity-100 bg-black p-4">
          <li>SHOP</li>
          <li>CONSULTATION</li>
          <li>RESOURCES</li>
          <li>MEMBERSHIP</li>
          <li>ABOUT</li>
        </ul>}
      </div>


      {/* For large screens */}
      
      <div className="hidden lg:flex justify-center ml-80 space-x-72">
        <ul className="flex pl-9 md:pl-0">
          {Links.map((link) => (
            <li key={link.name} className="my-7 md:my-0 md:ml-8 text-white cursor-pointer">
              <a href="/">{link.name}</a>
            </li>
          ))}
        </ul>
        </div>
        <div className="space-x-3 hidden lg:flex gap-3 ml-24 ">
          <BsSearch color="white" size={25} className="cursor-pointer"  />
          <BsFillPersonFill color="white" size={30} className="cursor-pointer" />
          <GiShoppingBag color="white" size={30} className="cursor-pointer" />
        </div>
    
    </div>
  </nav>
  );
};

export default Header;
