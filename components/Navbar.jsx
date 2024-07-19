import styles from "./Navbar.module.css"
const gate = "/gate.svg";

export default function Navbar() {
    return (
        <div className={styles.navdiv}>
            <img className={styles.gatelogo} src={gate} />
            <p className={styles.logo}>
            blr.<span className={styles.wiki}>wiki</span>
            </p>
        </div>
    );
}