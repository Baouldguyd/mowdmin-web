"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInOnScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>This appears on scroll</h2>
    </motion.div>
  );
};

export default FadeInOnScroll;
