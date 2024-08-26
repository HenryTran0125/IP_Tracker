"use client";
import Image from "next/image";
import styles from "./page.module.css";
import arrowButton from "../public/assets/images/chevron-forward-outline.svg";
import MapComponent from "./components/Map";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => (
    <p
      style={{
        position: "relative",
        top: "50%",
        left: "50%",
        transition: "translate(-50%,-50%)",
        fontSize: "1.8rem",
      }}
    >
      Loading map, please wait...
    </p>
  ),
});

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

            <div className={styles.button}>
              <Image alt="button" src={arrowButton} height={28} width={28} />
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <LazyMap />
        </div>
      </div>
    </main>
  );
}
