import { motion } from "framer-motion";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      <motion.h1
        className={styles.text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        Loading...
      </motion.h1>
    </div>
  );
}