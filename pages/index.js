import { useEffect } from "react";
import styles from "./index.module.css";
const AndroidLarge1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.androidLarge1} data-animate-on-scroll>
      <h2 className={styles.heyEcoBadger}>Hey Eco-Badger!</h2>
      <div className={styles.hereAreSome}>Here are some tasks for you:</div>
      <section className={styles.taskBox}>
        <b className={styles.task3}>Task 3:</b>
        <b className={styles.rdTaskDescriptionContainer}>
          <p className={styles.rdTaskDescription}>3rd Task Description</p>
          <p className={styles.rdTaskDescription}>Lorum Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorum Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorem Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorem Ipsum</p>
        </b>
      </section>
      <section className={styles.taskBox1}>
        <b className={styles.task3}>Task 2:</b>
        <b className={styles.rdTaskDescriptionContainer}>
          <p className={styles.rdTaskDescription}>2nd Task Description</p>
          <p className={styles.rdTaskDescription}>Lorum Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorum Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorem Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorem Ipsum</p>
        </b>
      </section>
      <section className={styles.taskBox2}>
        <b className={styles.task3}>Task 1:</b>
        <b className={styles.rdTaskDescriptionContainer}>
          <p className={styles.rdTaskDescription}>1st Task Description</p>
          <p className={styles.rdTaskDescription}>Lorum Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorum Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorem Ipsum</p>
          <p className={styles.rdTaskDescription}>Lorem Ipsum</p>
        </b>
      </section>
      <section className={styles.androidLarge1Child} />
      <section className={styles.wave}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
        <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
        <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
        <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
      </section>
      <div className={styles.androidLarge1Item} />
      <img
        className={styles.fireflyMinimalisiticRoundish}
        alt=""
        src="/firefly-minimalisitic-roundish-type-leaf-logo-37003fotor20230818233759-1@2x.png"
      />
      <img className={styles.extMenu11} alt="" src="/ext-menu1-1@2x.png" />
      <img className={styles.extMenu12} alt="" src="/ext-menu1-1@2x.png" />
      <img className={styles.extMenu13} alt="" src="/ext-menu1-1@2x.png" />
    </div>
  );
};

export default AndroidLarge1;
