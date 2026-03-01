import { Link } from "react-router-dom";
import styles from "./CustomLink.module.css";
import type { LinkProps } from "./link-model";
export default function CustomLink({href, children}: LinkProps) {
    return (
        <Link to={href} className={styles["link-modern"]}>{children}</Link>
    )
}