import React from "react";
import { motion } from "framer-motion";

function MenuButton({
  isOpen = false,
  color = "black",
  strokeWidth = 2,
  ...props
}) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {isOpen ? (
        <line x1="6" y1="18" x2="18" y2="6" />
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </motion.svg>
  );
}

export default MenuButton;
