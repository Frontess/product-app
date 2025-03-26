import React, { useState } from "react"; // Импорт React и хука useState для управления состоянием.
import { useDispatch } from "react-redux"; // Импорт хука useDispatch для взаимодействия с Redux.
import { addProduct } from "../redux/slices/producSlice"; // Импорт экшена addProduct из Redux Slice.
import { useRouter } from "next/router"; // Импорт useRouter для навигации между страницами.
import styles from "../styles/components/CreateProduct.module.css"; // Подключение CSS-модуля для стилизации.

const CreateProduct: React.FC = () => {
  // Локальные состояния для хранения данных, введённых пользователем.
  const [title, setTitle] = useState(""); // Название продукта.
  const [description, setDescription] = useState(""); // Описание продукта.
  const [image, setImage] = useState(""); // URL изображения продукта.
  const [price, setPrice] = useState(""); // Цена продукта.
  const [category, setCategory] = useState(""); // Категория продукта.

  const dispatch = useDispatch(); // Инициализация хука для выполнения экшенов Redux.
  const router = useRouter(); // Инициализация хука для маршрутизации.

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Отмена перезагрузки страницы при отправке формы.

    // Проверка, что все поля заполнены
    if (!title || !description || !image || !price || !category) {
      alert("Пожалуйста, заполните все обязательные поля!"); // Сообщение об ошибке, если поля пусты.
      return;
    }

    // Создание объекта нового продукта
    const newProduct = {
      id: Date.now().toString(), // Генерация уникального идентификатора для продукта.
      title, // Название продукта.
      description, // Описание продукта.
      image, // URL изображения.
      price: parseFloat(price), // Преобразование строки цены в число.
      category, // Категория продукта.
      liked: false, // Продукт по умолчанию не добавлен в избранное.
    };

    dispatch(addProduct(newProduct)); // Добавление нового продукта в Redux Store.
    alert("Продукт успешно создан!"); // Уведомление об успешном создании продукта.
    router.push("/products"); // Перенаправление пользователя на страницу с каталогом продуктов.
  };

  return (
    <div>
      {/* Кнопка "Назад" для возврата на страницу каталога продуктов */}
      <button
        className={styles.button}
        onClick={() => router.push("/products")} // Переход на страницу с продуктами.
        style={{ marginBottom: "20px" }}
      >
        ← Назад к продуктам
      </button>

      {/* Форма для ввода данных нового продукта */}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Поле для ввода названия продукта */}
        <input
          className={styles.input} // Стиль поля ввода.
          type="text"
          placeholder="Название" // Текст-подсказка.
          value={title} // Привязка значения к состоянию.
          onChange={(e) => setTitle(e.target.value)} // Обновление состояния при изменении текста.
          required // Поле обязательно для заполнения.
        />
        {/* Поле для ввода описания продукта */}
        <textarea
          className={styles.textarea}
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        {/* Поле для ввода URL картинки */}
        <input
          className={styles.input}
          type="text"
          placeholder="URL картинки"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        {/* Поле для ввода цены продукта */}
        <input
          className={styles.input}
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        {/* Поле для ввода категории продукта */}
        <input
          className={styles.input}
          type="text"
          placeholder="Категория"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        {/* Кнопка отправки формы */}
        <button className={styles.button} type="submit">
          Создать продукт
        </button>
      </form>
    </div>
  );
};

export default CreateProduct; // Экспорт компонента для использования в маршрутах.
