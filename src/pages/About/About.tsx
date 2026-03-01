import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>About Our Trivia Quiz App</h1>
        <p className={styles.subtitle}>
          Challenge your mind. Learn something new. Compete with friends.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>🎯 Our Mission</h2>
        <p className={styles.text}>
          Our goal is to make learning fun and interactive through engaging
          trivia quizzes across multiple categories. Whether you're testing
          your knowledge or discovering new facts, this platform is built to
          sharpen your thinking skills.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>🧠 What You Can Do</h2>
        <ul className={styles.list}>
          <li>Take quizzes in various categories</li>
          <li>Track your scores and progress</li>
          <li>Challenge friends and compete</li>
          <li>Improve your general knowledge</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>⚙️ Built With</h2>
        <p className={styles.text}>
          Built using React, TypeScript, and a powerful backend API to deliver
          a smooth and responsive quiz experience.
        </p>
      </section>
    </div>
  );
};

export default About;