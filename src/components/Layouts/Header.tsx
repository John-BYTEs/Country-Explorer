import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="w-full bg-grNav pt-4 pb-4 px-6 py-3 shadow-xl drop-shadow-xl-/50 flex justify-between items-center">
        <div className="font-bold">
          <h2 className="text-xl text-vistBlue cursor-pointer" onClick={() => window.location.reload()}>Country Explorer</h2>
          <p className="text-sm font-mono text-white">By Johndel Wolfe</p>
        </div>
        <ul className="flex gap-6 text-xl text-vistBlue font-mono font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-vistBlue"
              }> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-vistBlue"
              }>About</NavLink>
          </li>

          <li>
            <NavLink to="/about-api"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-vistBlue"
              }>API</NavLink>
          </li>

        </ul>
      </nav>
    </>
  );
}
