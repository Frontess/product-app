import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  loadProducts,
  deleteProduct,
  toggleLike,
} from "../redux/slices/producSlice";
import Card from "../components/Card";
import Link from "next/link";
import styles from "../styles/components/Card.module.css";

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>(""); // Состояние для поиска

  const {
    items: products,
    loading,
    error,
  } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  // Загрузка товаров при первом рендере
  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts());
    }
  }, [dispatch, products.length]);

  // Фильтрация карточек на основе фильтра и текста поиска
  const filteredProducts = products.filter((product) => {
    const matchesFilter = filter === "favorites" ? product.liked : true; // Фильтр "Избранные" или "Все"
    const matchesSearchTerm =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()); // Поиск по названию или описанию
    return matchesFilter && matchesSearchTerm;
  });

  // Индикатор загрузки
  if (loading) {
    return <div>Идёт загрузка товаров...</div>;
  }

  // Обработка ошибок
  if (error) {
    return <div>Ошибка загрузки товаров: {error}</div>;
  }

  return (
    <div>
      {/* Заголовок с логотипом */}
      <div className={styles.header}>
        <Link href="/">
          <img
            src="/product-app//favicon.ico" // Путь к фавикону
            alt="Логотип Product App"
            className={styles.logo}
          />
        </Link>
        <h1 className={styles.pageTitle}>Наши товары</h1>
      </div>

      {/* Кнопка для создания нового продукта */}
      <Link href="/create-product">
        <button className={styles.createButton}>Создать продукт</button>
      </Link>

      {/* Поле ввода для поиска */}
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {/* Кнопки фильтрации */}
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterButton} ${
            filter === "all" ? styles.activeButton : ""
          }`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`${styles.filterButton} ${
            filter === "favorites" ? styles.activeButton : ""
          }`}
          onClick={() => setFilter("favorites")}
        >
          Избранные
        </button>
      </div>

      {/* Карточки товаров */}
      <div className={styles.cardContainer}>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            liked={product.liked}
            onToggleLike={() => dispatch(toggleLike(product.id))}
            onDelete={() => dispatch(deleteProduct(product.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
