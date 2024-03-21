import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation(); 

  // Function to determine if the link is active
  const isActive = (pathname: string) => location.pathname === pathname;

  return (
    <nav className="sticky top-0 z-10 flex flex-col w-full px-6 py-4 font-sans text-center bg-blue-500 shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <Link to={`/`}>
            <img className="w-28 " src={`${import.meta.env.BASE_URL}assets/GIPHY Transparent 27px.png`} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to={`/`}>
            <span className={`flex uppercase flex-row items-center gap-2 text-base font-bold text-white no-underline ${isActive('/') ? 'bg-blue-700 ' : ''} hover:bg-blue-600 px-2 py-1 rounded`}>
              Search
            </span>
          </Link>
          <Link to={`/favorite`}>
            <span className={`flex uppercase flex-row items-center gap-2 text-base font-bold text-white no-underline ${isActive('/favorite') ? 'bg-blue-700' : ''} hover:bg-blue-600 px-2 py-1 rounded`}>
              Favorites
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
