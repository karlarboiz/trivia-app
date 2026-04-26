import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
export default function Layout(){
    const location = useLocation();
    const outlet = useOutlet();

    return <>
        <Navbar/>
        <main className={styles["layout"]}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={location.pathname}
                className={styles.pageTransitionWrap}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {outlet}
              </motion.div>
            </AnimatePresence>
        </main>
        <Footer/>
    </>
}