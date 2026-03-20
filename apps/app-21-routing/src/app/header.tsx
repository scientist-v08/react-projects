import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      {/* Title Div */}
      <div>
        <h1 className="text-3xl font-bold">React Router</h1>
      </div>

      {/* Pages Div */}
      <nav className="flex gap-4">
        {' '}
        <ul className="flex items-center gap-6 text-lg">
          {' '}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-200 font-bold underline'
                  : 'hover:text-blue-200 transition-colors'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-200 font-bold underline'
                  : 'hover:text-blue-200 transition-colors'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-200 font-bold underline'
                  : 'hover:text-blue-200 transition-colors'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food/corn"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-200 font-bold underline'
                  : 'hover:text-blue-200 transition-colors'
              }
            >
              Food
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
