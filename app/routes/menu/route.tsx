import { useState } from "react";
import Sidebar from "~/components/sidebar/sidebar";
import { categories } from "~/resources/categories";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { BackButton } from "~/components/BackButton/BackButton";
import { Button } from "~/components/ui/button";
import { MdMenu } from "react-icons/md";

const MenuPageLayout = () => {
  const defaultCategory = Object.keys(categories)[0];
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <main className="flex-1 min-h-screen lg:ml-72 relative mb-10">
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="flex-1 pt-10 px-5 relative">
        <div className="flex items-center justify-between mb-6">
          {/* BACK BUTTON */}
          <BackButton />
          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="">
                <Button
                  variant="outline"
                  className="shadow bg-primaryColor text-white outline-none"
                >
                  {/* <MdMenu size={32} className="border w-full" /> */}
                  Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 px-5 py-5 space-y-10 mr-10 max-h-[800px] overflow-y-scroll scrollbar-thin scrollbar-hide">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="flex flex-col space-y-2"
                >
                  {Object.keys(categories).map((category, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`capitalize p-5 border-l-8 border-l-orange-600 border-b-2 cursor-pointer`}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                  {/* <DropdownMenuSeparator /> */}
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <hr />
        <section className="flex-1 space-y-4 mt-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">
            {activeCategory}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-2 min-h-auto">
            {categories[activeCategory as keyof typeof categories]?.map(
              (item, index) => (
                <MenuCard index={index} item={item} />
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MenuPageLayout;

function MenuCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
      }}
      className="cursor-pointer relative"
    >
      <Card className="h-44 lg:h-44 hover:bg-gray-100 transition-all duration-500 ease-in-out shadow-lg p-0">
        <CardHeader>
          <CardTitle className="text-sm md:text-base lg:text-lg text-secondaryColor">
            {item.name}
          </CardTitle>
          <CardDescription className="text-sm md:text-base lg:text-lg text-primaryColor font-bold">
            {item.price}
          </CardDescription>
        </CardHeader>
        <hr />
        <CardContent className="pt-2 text-xs md:text-sm">
          <p>{item.description}</p>
        </CardContent>
      </Card>

      {/* <span className="absolute top-0 bg-primaryColor w-8 h-8" /> */}
    </motion.div>
  );
}
