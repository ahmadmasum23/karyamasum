"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LuChevronsUpDown as ArrowIcon } from "react-icons/lu";
import { TiTick as ActiveIcon } from "react-icons/ti";
import { FiSearch as SearchIcon } from "react-icons/fi";

interface DataComboBox {
  label: string;
  value: string;
}

interface ComboBoxCardProps {
  onFilterChange?: (value: string) => void;
}

const data: DataComboBox[] = [
  { label: "All", value: "all" },
  { label: "Language", value: "language" },
  { label: "Framework / Libraries", value: "framework" },
  { label: "Database", value: "database" },
  { label: "Tool / AI", value: "tool/ai" },
//   { label: "AI", value: "ai" },
];

export default function ComboBoxCard({ onFilterChange }: ComboBoxCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");
  const comboRef = useRef<HTMLDivElement>(null);

  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const selectItem = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onFilterChange?.(value); // 🔥 kirim ke parent
  };

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (comboRef.current && !comboRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={comboRef} className="relative w-full md:w-[230px]">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between gap-4 rounded-md bg-neutral-100 p-2 text-neutral-900 outline outline-neutral-300 hover:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-400 dark:outline-neutral-700 dark:hover:bg-neutral-800"
      >
        <span className="text-sm">
          {data.find((d) => d.value === selected)?.label ?? "Select"}
        </span>
        <ArrowIcon
          className={`transition duration-200 ${isOpen ? "rotate-180 scale-125" : ""}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-12 z-20 w-full"
        >
          <div className="rounded-md bg-neutral-100 shadow-lg outline outline-neutral-300 dark:bg-neutral-900 dark:outline-neutral-700">
            <div className="flex items-center gap-2 border-b border-neutral-300 px-3 py-2 dark:border-neutral-700">
              <SearchIcon className="text-neutral-500 dark:text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-50"
              />
            </div>

            <div className="p-1 max-h-48 overflow-y-auto">
              {filteredData.length === 0 ? (
                <div className="px-4 py-2 text-center text-sm text-neutral-700 dark:text-neutral-200">
                  No items found
                </div>
              ) : (
                filteredData.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => selectItem(item.value)}
                    className={`flex w-full items-center gap-2 rounded-md p-2 text-left text-sm hover:bg-neutral-300 dark:hover:bg-neutral-800 ${
                      item.value === selected
                        ? "bg-neutral-200 dark:bg-neutral-800"
                        : ""
                    }`}
                  >
                    {item.value === selected && (
                      <ActiveIcon className="text-green-500" />
                    )}
                    <span>{item.label}</span>
                  </button>
                ))
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
