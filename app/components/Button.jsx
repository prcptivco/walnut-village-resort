"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { forwardRef } from "react";

// Create a motion-enabled Link component
const MotionLink = motion(Link);

const Button = ({
  children,
  primary = false,
  glass = false,
  onClick,
  href,
  to,
  className = "",
  ...props
}) => {
  const baseClass = `inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 border hover:shadow-lg cursor-pointer ${className}`;

  let styles = "";
  if (glass) {
    styles =
      "bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-black hover:border-white transform-gpu";
  } else if (primary) {
    styles =
      "bg-[#2C1810] text-white border-[#2C1810] hover:bg-[#4A2C20] hover:border-[#4A2C20]";
  } else {
    styles =
      "bg-transparent text-[#2C1810] border-[#D7C9B8] hover:bg-[#F9F6F0] hover:border-[#A1887F]";
  }

  const animationProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  // Internal navigation via Next.js Link
  if (to) {
    return (
      <MotionLink
        href={to}
        className={`${baseClass} ${styles}`}
        {...animationProps}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  // External link
  if (href && !onClick) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${styles}`}
        {...animationProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  // Action button
  return (
    <motion.button
      onClick={onClick}
      className={`${baseClass} ${styles}`}
      type="button"
      {...animationProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
