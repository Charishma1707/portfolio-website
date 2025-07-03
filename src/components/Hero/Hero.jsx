import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Charishma</h1>
        <p className={styles.description}>
        Motivated and detail-oriented web developer with a strong foundation in data structures and algorithms. Proficient in building responsive, user-friendly web applications using modern technologies, with a proven track record of solving complex algorithmic problems. Experienced in full-stack development and implementing secure authentication systems. Currently expanding skill set in Machine Learning with hands-on experience in frameworks such as Scikit-learn, TensorFlow, and Keras.
        </p>
        <a href="mailto:charishmaalam8@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/images.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
