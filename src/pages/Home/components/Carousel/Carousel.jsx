import React from "react";
import styles from "../../styles/Carousel.module.css";
import data from "./data.json";
import Card from "./Card";
import { useRef, useEffect } from "react";

const Carousel = () => {
  const reviews = data.reviews;
  const boxRef = useRef(null);

  const btnprev = () => {
    const box = boxRef.current;
    if (box) {
      const itemWidth = box.querySelector(`.${styles.card}`).clientWidth;
      box.scrollLeft = box.scrollLeft - itemWidth;
      console.log(itemWidth);
    }
  };

  const btnpost = () => {
    const box = boxRef.current;
    if (box) {
      const itemWidth = box.querySelector(`.${styles.card}`).clientWidth;
      box.scrollLeft = box.scrollLeft + itemWidth;
      console.log(itemWidth);
    }
  };

  useEffect(() => {
    const box = boxRef.current;
    if (box) {
      box.scrollLeft = 0;
    }
  }, []);
  return (
    <div className={styles.contain}>
      {" "}
      <div className={styles.container}>
        <button
          className={styles.prebtn}
          onClick={btnprev}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div
          className={styles.Carousel}
          ref={boxRef}>
          {reviews.map((data, index) => (
            <Card
              {...data}
              key={index}
            />
          ))}
        </div>
        <button
          className={styles.postbtn}
          onClick={btnpost}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
