import { categories } from "~/resources/categories";
import { Link } from "@remix-run/react";

interface SidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const Sidebar = ({ activeCategory, setActiveCategory }: SidebarProps) => {
  return (
    <aside className="fixed top-0 left-0 w-72 bg-gray-100 p-4 pt-10 min-h-screen border gap-y-5 hidden lg:flex lg:flex-col">
      <h2 className="text-xl font-extrabold text-secondaryColor uppercase">
        Menu Categories
      </h2>
      <div className="flex flex-col space-y-2">
        {Object.keys(categories).map((category, index) => (
          <span
            key={index}
            className={`cursor-pointer py-5 px-2 border-l-8 box-border rounded-sm border border-gray-500 w-full shadow-xl hover:bg-gray-100 ${
              index % 2 === 0
                ? "border-l-secondaryColor"
                : "border-l-primaryColor"
            } ${activeCategory === category ? "bg-slate-950/20" : "bg-white"}`}
            onClick={() => setActiveCategory(category)}
          >
            <Link
              to=""
              className="w-full justify-start capitalize text-md text-secondaryColor"
            >
              {category}
            </Link>
          </span>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
