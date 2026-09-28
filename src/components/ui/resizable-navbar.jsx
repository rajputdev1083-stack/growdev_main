  "use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

/* ================= NAVBAR WRAPPER ================= */

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

/* ================= DESKTOP NAV ================= */

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      style={{ minWidth: "800px" }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full px-4 py-2 lg:flex",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* ================= NAV ITEMS ================= */

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 items-center justify-center space-x-2 text-sm font-medium lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

/* ================= MOBILE NAV ================= */

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col px-2 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children }) => {
  return (
    <div className="flex w-full items-center justify-between">
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, isOpen, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 flex flex-col gap-4 rounded-lg bg-white px-4 py-6 shadow-lg dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

/* ================= LOGO ================= */

export const NavbarLogo = () => {
  return (
    <Link
  href="/"
  className="flex items-center gap-2 px-2 py-1"
>
  <img src="/logo.jpg" alt="logo" width={50} height={30} />
  <span className="font-medium text-black dark:text-white">
    AV Development
  </span>
</Link>
  );
};

/* ================= BUTTON ================= */

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
}) => {
  const base =
    "px-4 py-2 rounded-md text-sm font-bold transition";

  const styles = {
    primary: "bg-white text-black",
    secondary: "bg-transparent text-white",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, styles[variant], className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
};