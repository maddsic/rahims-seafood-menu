import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "@remix-run/react";
import { Navbar } from "../Navbar/Navbar";
import { Headlines } from "~/resources/headlines";

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Headlines.length);
    }, 10000);

    return () => clearInterval(slider);
  }, []);

  return (
    <>
      <Navbar />
      <main
        style={{ backgroundImage: `url(${Headlines[index].bgImage})` }}
        className={`flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden bg-cover -opacity-100 bg-gray-600 w-full`}
      >
        <AnimatePresence mode="wait">
          <div className="z-40 text-center w-screen p-2">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white capitalize"
            >
              {Headlines[index].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            >
              {Headlines[index].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <Button
                onClick={() => navigate("/menu")}
                className="px-8 py-6 text-lg bg-orange-600 font-extrabold animate-bounce hover:bg-orange-700 rounded-2xl shadow-2xl"
              >
                View Menu
              </Button>
            </motion.div>
          </div>
        </AnimatePresence>
      </main>
      {/* SLIDER DOTS */}
      <div className="absolute flex items-center bottom-20 justify-center gap-3 w-full z-30">
        {Headlines.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setIndex(i)}
            className={` w-5 h-1 lg:w-10 lg:h-2 rounded-md cursor-pointer ${
              i === index
                ? "bg-black w-10 h-2 lg:w-20 lg:h-3 transition-all duration-500"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
