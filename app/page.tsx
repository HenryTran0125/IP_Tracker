import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <h2 className={styles.h2}>IP Address Tracker</h2>

          <div className={styles.inputOutside}>
            <input
              className={styles.input}
              placeholder="Search for any IP address or domain"
            />
          </div>
        </div>

        <div className={styles.mapContainer}></div>
      </div>
    </main>
  );
}
