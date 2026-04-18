import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
export default function Layout(){

    return <>
        <Navbar/>
        <main className={styles["layout"]}>
            <Outlet/>
        </main>
        <Footer/>
    </>
}