import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import type React from "react"; // Added import for React
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md h-[]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              Rahim's
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink> */}
            {/* <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink> */}
          </div>
          <div className="flex items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
