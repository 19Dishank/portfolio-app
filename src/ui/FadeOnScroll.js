import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FadeOnScroll({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // 20% of section visible
    triggerOnce: false, // allow reverse animation
  });

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  // Trigger animations on scroll in/out
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
}
