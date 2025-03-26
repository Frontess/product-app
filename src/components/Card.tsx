import React from "react";
import Link from "next/link";
import styles from "../styles/components/Card.module.css";

type CardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  liked: boolean;
  onToggleLike: () => void;
  onDelete: () => void;
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  image,
  liked,
  onToggleLike,
  onDelete,
}) => {
  return (
    <div className={styles.card}>
      <Link href={`/products/${id}`}>
        <div className={styles.cardContent}>
          <img src={image} alt={title} className={styles.image} />
          <h3 className={styles.cardTitle}>{title}</h3>
          <p>{description.slice(0, 100)}...</p>
        </div>
      </Link>
      <div className={styles.actions}>
        <button
          onClick={onToggleLike}
          className={liked ? styles.liked : styles.likeButton}
        >
          ❤️
        </button>
        <button onClick={onDelete} className={styles.deleteButton}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Card;
