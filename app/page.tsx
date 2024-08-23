import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <h2>IP Address Tracker</h2>

          <input placeholder="Search for any IP address or domain" />
        </div>

        <div className={styles.mapContainer}></div>
      </div>
    </main>
  );
}
