import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
export default function Layout(){

    return <>
        <Header/>
        <main className={styles["layout"]}>
            <Outlet/>
        </main>
        <Footer/>
    </>
}