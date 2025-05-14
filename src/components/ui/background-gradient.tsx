import { cn } from "@/lib/utils";
import React from "react";
import { motion, useAnimation } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      boxShadow: [
        "0 0 8px rgba(168, 85, 247, 0.4)",
        "0 0 20px rgba(168, 85, 247, 0.7)",
        "0 0 8px rgba(168, 85, 247, 0.4)",
      ],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      boxShadow: "0 0 0px rgba(0,0,0,0)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    });
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-3xl shadow-md transition-all duration-500 group",
        containerClassName
      )}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Glow Layer */}
      <motion.div
        initial={{ boxShadow: "0 0 0px rgba(0,0,0,0)" }}
        animate={controls}
        className="absolute inset-0 rounded-3xl z-0"
      />

      {/* Card Content */}
      <div
        className={cn(
          "relative z-10 bg-white dark:bg-zinc-900 rounded-3xl p-6",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
