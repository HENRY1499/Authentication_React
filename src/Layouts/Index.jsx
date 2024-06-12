/* eslint-disable react-hooks/rules-of-hooks */
import { Link, Outlet } from "react-router-dom";

function Index() {
  return (
    <div className="container mx-auto">
      <div className="relative top-0 left-0">
        <div className="flex flex-row gap-5">
          <div className="py-2 px-4">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-600 tracking-widest"
            >Registrate | </Link>
            <Link
              to="/login"
              className="text-gray-500 hover:text-gray-600 tracking-widest"
            >Login</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full flex md:justify-center md:items-center px-6">
          <div className="w-full lg:w-6/12  h-full rounded-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
