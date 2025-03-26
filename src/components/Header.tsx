import React from "react";
import Link from "next/link";
import styles from "../styles/components/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Product App</h1>
      <nav className={styles.nav}>
        <Link href="/products">Products</Link>
        <Link href="/create-product">Create Product</Link>
      </nav>
    </header>
  );
};

export default Header;
