import React from "react";
import Link from "next/link";
import styles from "../styles/components/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Картинка crystal-ball */}
      <img
        src="/crystal-ball.png"
        alt="Crystal Ball"
        className={styles.image}
      />
      <h1 className={styles.title}>Добро пожаловать в Product App!</h1>
      <p className={styles.description}>
        Хотите посмотреть наши товары или создать что-то новое? В этом
        приложении легко творить и вдохновляться!
      </p>
      <div className={styles.buttonContainer}>
        <Link href="/products">
          <button className={`${styles.button} ${styles.productsButton}`}>
            Перейти к товарам
          </button>
        </Link>
        <Link href="/create-product">
          <button className={`${styles.button} ${styles.createButton}`}>
            Создать продукт
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
