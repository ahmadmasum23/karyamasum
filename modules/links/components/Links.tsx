"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsGlobe,
  BsKeyboard,
  BsShieldCheck,
  BsEnvelope,
  BsArrowUpRightCircle,
  BsGeoAlt,
  BsTiktok,
  BsQrCode,
  BsCopy,
  BsShare,
  BsCheck,
} from "react-icons/bs";
import { useTranslations } from "next-intl";

const Links = () => {
  const t = useTranslations("LinksPage");
  
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showQRModal, setShowQRModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef(0);
  const isDragging = useRef(false);

  const currentURL = typeof window !== "undefined" ? window.location.href : "https://ahmadmasum.vercel.app";

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Toggle theme & save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Copy URL to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentURL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Share via Web Share API
  const sharePage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ahmad Ma'sum - Links",
          text: t("description"),
          url: currentURL,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      copyToClipboard();
    }
  };

  // Handle QR button click with animation
  const handleQRClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowQRModal(true);
      setTimeout(() => setIsAnimating(false), 300);
    }, 200);
  };

  // Close modal with animation
  const closeModal = useCallback(() => {
    setShowQRModal(false);
    setDragOffset(0);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showQRModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showQRModal]);

  // Drag/Touch handlers
  const handleDragStart = (clientY: number) => {
    isDragging.current = true;
    dragStartY.current = clientY;
  };

  const handleDragMove = useCallback((clientY: number) => {
    if (!isDragging.current || !modalRef.current) return;

    const deltaY = clientY - dragStartY.current;

    if (deltaY > 0) {
      setDragOffset(deltaY);
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const threshold = 150;

    if (dragOffset > threshold) {
      closeModal();
    } else {
      setDragOffset(0);
    }
  }, [dragOffset, closeModal]);

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientY);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientY);
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    handleDragMove(e.clientY);
  }, [handleDragMove]);

  const onMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Add global mouse event listeners when dragging
  useEffect(() => {
    if (showQRModal && isDragging.current) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
    }
  }, [showQRModal, onMouseMove, onMouseUp]);

  return (
    <div className="w-full max-w-md mx-auto font-sans transition-colors duration-300 
                    bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 min-h-screen py-8 px-4">

      {/* --- QR CODE BUTTON --- */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleQRClick}
          className={`
            p-2.5 rounded-xl border transition-all duration-300
            bg-neutral-100 border-neutral-200 text-neutral-600 hover:bg-neutral-200 hover:shadow-md
            dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700
            ${isAnimating ? "scale-90 rotate-12" : "hover:scale-110 hover:rotate-3"}
          `}
          aria-label={t("sharePage")}
        >
          <BsQrCode size={20} />
        </button>
      </div>

      {/* --- PROFILE SECTION --- */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-blue-400 to-purple-500 mb-4 
                        transform transition-transform duration-300 hover:scale-105">
          <img
            src={"/images/masm.png"}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-white dark:border-neutral-950"
          />
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Ahmad Ma'sum</h1>
        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{t("job")}</p>
        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm mt-1">
          <BsGeoAlt size={14} />
          <span>{t("loc")}</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <SocialIcon icon={<BsGithub size={20} />} href="https://github.com/ahmadmasum23" theme={theme} />
          <SocialIcon icon={<BsLinkedin size={20} />} href="https://www.linkedin.com/in/ahmadmasum" theme={theme} />
          <SocialIcon icon={<BsInstagram size={20} />} href="https://www.instagram.com/ahmdmsum" theme={theme} />
          <SocialIcon icon={<BsTiktok size={20} />} href="https://www.tiktok.com/@stockwaveid" theme={theme} />
        </div>
      </div>

      {/* --- LINKS LIST --- */}
      <div className="space-y-3">
        <LinkCard
          icon={<BsGlobe size={20} />}
          title={t("portfolio")}
          desc={t("cardPorto")}
          href="https://ahmadmasum.vercel.app"
          theme={theme}
        />
        <LinkCard
          icon={<BsKeyboard size={20} />}
          title={t("monkeytype")}
          desc={t("cardMonkeytype")}
          href="https://monkeytype.com/profile/AhmadMasum"
          theme={theme}
        />
        <LinkCard
          icon={<BsShieldCheck size={20} />}
          title={t("saweria")}
          desc={t("cardSaweria")}
          href="https://saweria.co/ahmadmasum"
          theme={theme}
        />
      </div>

      {/* --- GET IN TOUCH SECTION --- */}
      <div className="mt-8 rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-[1.02]
                bg-neutral-50 border border-neutral-200 hover:shadow-xl
                dark:bg-neutral-800 dark:border-neutral-700 dark:hover:shadow-2xl">

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300
                  bg-blue-100 text-blue-600 hover:scale-110 hover:rotate-3
                  dark:bg-blue-500/10 dark:text-blue-500">
          <BsEnvelope size={24} />
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{t("getInTouch")}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
          {t("sub_getInTouch")}
        </p>

        {/* Email Button */}
        <button 
          onClick={() => window.location.href = "mailto:ahmadmasum127@gmail.com"}
          className="bg-neutral-900 text-white px-5 py-2.5 rounded-lg font-medium text-sm 
                     inline-flex items-center gap-2 hover:bg-neutral-800 transition-all duration-200
                     transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg
                     dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
          <span>{t("sendEmail")}</span>
          <BsArrowUpRightCircle size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Email Address */}
        <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm font-mono">
            ahmadmasum127@gmail.com
          </p>
        </div>
      </div>

      {/* --- QR CODE MODAL --- */}
      {showQRModal && (
        <>
          {/* Backdrop */}
          <div
            className={`
              fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300
              ${dragOffset > 0 ? "opacity-0" : "opacity-100"}
            `}
            onClick={closeModal}
          />

          {/* Bottom Sheet */}
          <div
            ref={modalRef}
            className={`
              fixed bottom-0 left-0 right-0 z-50 
              transition-transform duration-200 ease-out
              ${dragOffset > 0 ? "duration-75" : ""}
            `}
            style={{ transform: `translateY(${dragOffset}px)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
          >
            <div className="mx-auto max-w-md rounded-t-3xl bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden">
              
              {/* Handle Bar */}
              <div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
                <div className="w-10 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 hover:w-12" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white text-center flex-1">
                  {t("sharePage")}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* QR Code */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <img
                      src="/images/QrCode.png"
                      alt="QR Code"
                      className="w-48 h-48 object-contain rounded-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='white' width='100' height='100'/%3E%3Cpath fill='black' d='M10,10 h30 v30 h-30 z M50,10 h30 v30 h-30 z M10,50 h30 v30 h-30 z M60,60 h30 v30 h-30 z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>

                {/* URL Section */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                    {t("urlPage")}
                  </label>
                  <div className="flex gap-2 relative">
                    
                    {/* Toast Notification */}
                    {copied && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg bg-neutral-800 dark:bg-neutral-700 text-white text-sm font-medium shadow-lg animate-fade-in-up whitespace-nowrap z-10">
                        {t("copied")}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-800 dark:bg-neutral-700 rotate-45"></div>
                      </div>
                    )}

                    <input
                      type="text"
                      readOnly
                      value={currentURL}
                      className="flex-1 px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border-0 text-sm text-neutral-700 dark:text-neutral-300 focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={copyToClipboard}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center
                        ${copied
                          ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                          : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                        }`}
                      aria-label={copied ? t("copied") : "Copy URL"}
                    >
                      {copied ? <BsCheck size={20} /> : <BsCopy size={18} />}
                    </button>
                  </div>
                </div>

                {/* Share Button */}
                <button
                  onClick={sharePage}
                  className="w-full py-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium 
                             flex items-center justify-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
                >
                  <BsShare size={18} />
                  <span>{t("share")}</span>
                </button>
              </div>

              {/* Safe Area */}
              <div className="h-6" />
            </div>
          </div>
        </>
      )}

    </div>
  );
};

// --- Helper Components ---

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  theme: "light" | "dark";
}

const SocialIcon = ({ icon, href, theme }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 
               transform hover:scale-110 hover:-translate-y-1 hover:rotate-3
               bg-neutral-100 border border-neutral-200 text-neutral-600 
               hover:text-white hover:bg-neutral-800 hover:border-neutral-700 hover:shadow-md
               dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 
               dark:hover:bg-neutral-700"
  >
    {icon}
  </a>
);

interface LinkCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  theme: "light" | "dark";
}

const LinkCard = ({ icon, title, desc, href, theme }: LinkCardProps) => (
  <a
    href={href}
    className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ease-out
               bg-white border border-neutral-200 
               hover:border-blue-400 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1
               dark:bg-neutral-900 dark:border-neutral-700 dark:hover:border-blue-500"
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                    bg-neutral-100 text-neutral-600 
                    group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3
                    dark:bg-neutral-800 dark:text-neutral-400">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-sm text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h4>
      <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-0.5">{desc}</p>
    </div>
    <BsArrowUpRightCircle
      size={18}
      className="text-neutral-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 
                 dark:text-neutral-500 transition-all duration-300"
    />
  </a>
);

export default Links;