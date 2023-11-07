import { NavLink } from "react-router-dom";

const navLinks =<>
<li className="text-blue-300 font-medium text-xl">
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "active" : ""
}
>
  Home
</NavLink>
</li>
<li className="text-blue-300 font-medium text-xl ">
<NavLink
  to="/about"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "active" : ""
} 
>
  About
</NavLink>
</li>

<li className="text-blue-300 font-medium text-xl">
<NavLink
  to="/projects"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Projects
</NavLink>
</li>

<li className="text-blue-300 font-medium text-xl">
<NavLink
  to="/resume"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Resume
</NavLink>
</li>
<li className="text-blue-300 font-medium text-xl">
<NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Contact
</NavLink>
</li>

</>

const Navbar = () => {
 return (
  <div className=" mx-auto bg-slate-600">
  <div className="navbar h-28 ">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navLinks}
    </ul>
  </div>
<div className="mr-5 w-16 h-14">
<img src="" alt="" />
</div>
<h1 className="text-3xl font-semibold text-blue-300">Ayesha Liza</h1>         
</div>
<div className="navbar-end hidden lg:flex">
  
  <ul className="menu menu-horizontal px-1">
 {navLinks}
  </ul>
</div>
{/* <div className="navbar-end gap-4">

</div> */}
</div>
    </div>
 );
};

export default Navbar;