"use client";
import Image from "next/image";
import styles from "./page.module.css";
import arrowButton from "../public/assets/images/chevron-forward-outline.svg";
import MapComponent from "./components/Map";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import {
  getUserPosition,
  reverseGeocoding,
  testAPI,
} from "./components/geolocation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

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
  const [input, setInput] = useState<any | null>(" ");
  const [lat, setLat] = useState<number>(10.7736054);
  const [lng, setLng] = useState<number>(106.6315477);

  async function fetchingMap(input: any) {
    const data = await testAPI(input);
    setLat(data.location.lat);
    setLng(data.location.lng);

    // console.log(data);
    // console.log(data.location.lat, data.location.lng);
  }

  async function reverseGeo() {
    const data = await reverseGeocoding(lat, lng);

    console.log(data);
  }

  const handleChange = (value: any) => {
    setInput(value);
  };

  const debounced = useDebouncedCallback(() => fetchingMap(input), 800);
  debounced();
  reverseGeo();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <h2 className={styles.h2}>IP Address Tracker</h2>

          <div className={styles.inputOutside}>
            <input
              className={styles.input}
              placeholder="Search for any IP address or domain"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />

            <div className={styles.button}>
              <Image alt="button" src={arrowButton} height={28} width={28} />
            </div>
          </div>
          {/* <button onClick={() => getUserPosition()}>Get position</button> */}
        </div>

        <div className={styles.mapContainer}>
          <LazyMap lat={lat} lng={lng} />
        </div>
      </div>
    </main>
  );
}
