import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Welcome to my Repo</h1>
      <button className={styles.btn}>Github</button>
    </div>
  );
}
