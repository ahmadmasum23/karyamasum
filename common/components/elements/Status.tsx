import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Hire me.", "Open to work.", "Building cool stuff."];

const Status = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // ganti tiap 2 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1">
      <motion.div
        className="h-2 w-2 rounded-full bg-blue-400"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />

      <motion.span
        key={index}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3 }}
        className="text-sm font-thin text-neutral-600 dark:text-neutral-400"
      >
        {texts[index]}
      </motion.span>
    </div>
  );
};

export default Status;