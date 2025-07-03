import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">charishmaalam8@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">https://www.linkedin.com/in/charishma-alam-42165a307/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">https://github.com/Charishma1707/
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.leetcode} src={getImageUrl("contact/download.png")} alt="Leetcode icon" />
          <a href="https://www.github.com/myname">https://leetcode.com/u/nikki1706/ 
          </a>
        </li>
      </ul>
    </footer>
  );
};
