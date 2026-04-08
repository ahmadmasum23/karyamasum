import { motion } from "framer-motion";

import { MENU_ITEMS } from "@/common/constants/menu";

import Breakline from "../../elements/Breakline";

import Menu from "./Menu";
import IntlToggle from "./IntlToggle";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <motion.div
      className="my-3 flex h-screen flex-col"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* <div>
        <Breakline />
        <Menu list={filteredMenu} />
      </div> */}
      <div className="flex justify-end gap-3 mb-4">
    <IntlToggle />
    <ThemeToggle />
  </div>

  <Breakline />
  <Menu list={filteredMenu} />
    </motion.div>
  );
};

export default MobileMenu;
