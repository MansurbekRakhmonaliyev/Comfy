import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from './NavLinks'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";



function Navbar() {
  const {card} = useSelector(store=>store)
  console.log(card);
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', localStorage.getItem('mode'))
    },[])
    const testMode = ()=>{
        if(document.documentElement.getAttribute('data-theme') == 'emerald'){
            document.documentElement.setAttribute('data-theme', 'dracula')
            localStorage.setItem('mode', 'dracula')
        }else{
            document.documentElement.setAttribute('data-theme', 'emerald')
            localStorage.setItem('mode', 'emerald')
        }
    }

  return (
    <nav className="bg-base-200 ">
      <div className="navbar container-ms px-8">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden btn lg:flex btn-primary text-3xl items-center"
          >
            c
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-base-200"
            >
               <NavLinks/>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
                <NavLinks/>
            </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={testMode}/>
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/cart" className="btn btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {card.numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;