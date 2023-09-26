import { Braces, LayoutGrid } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[300px,1fr] gap-6 p-6">
      <nav className="bg-neutral-200 dark:bg-gray-800 rounded-lg shadow p-4">
        <ul className="space-y-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center rounded-lg border border-current transform ease-in-out duration-300 px-4 py-2"
                  : "flex items-center rounded-lg border border-transparent hover:border-current transform ease-in-out duration-300 px-4 py-2"
              }
              to="/dashboard/projects"
            >
              <LayoutGrid className="mr-1" /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center rounded-lg border border-current transform ease-in-out duration-300 px-4 py-2"
                  : "flex items-center rounded-lg border border-transparent hover:border-current transform ease-in-out duration-300 px-4 py-2"
              }
              to="/dashboard/tecnologies"
            >
              <Braces className="mr-1" /> Tecnologies
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
