import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { loadProducts } from "../../redux/slices/producSlice";
import styles from "../../styles/components/ProductPage.module.css";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Типизированный dispatch для поддержки асинхронных действий
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  // Получаем товары из Redux Store
  const {
    items: products,
    loading,
    error,
  } = useSelector((state: RootState) => state.products);

  // Загружаем товары, если они ещё не загружены
  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts()); // Здесь не требуется приведение типов
    }
  }, [dispatch, products.length]);

  // Находим текущий продукт
  const product = products.find((product) => product.id === String(id));

  // Показываем индикатор загрузки
  if (loading) {
    return <div>Loading product...</div>;
  }

  // Если произошла ошибка загрузки
  if (error) {
    return <div>Error loading product: {error}</div>;
  }

  // Если продукт не найден
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <button
        className={styles.backButton}
        onClick={() => router.push("/products")}
      >
        ← Назад к товарам
      </button>
      <div className={styles.card}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.content}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
