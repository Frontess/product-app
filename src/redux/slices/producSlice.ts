import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../../utils/api";

// Тип данных для продукта
type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  liked: boolean;
};

// Тип начального состояния
type ProductState = {
  items: Product[];
  loading: boolean;
  error: string | null;
};

// Начальное состояние
const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

// Асинхронный экшен для загрузки продуктов
export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async () => {
    const products = await fetchProducts();
    return products.map((product: any) => ({
      id: product.id.toString(),
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      category: product.category || "Uncategorized",
      liked: false,
    }));
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
    toggleLike(state, action: PayloadAction<string>) {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true; // Загрузка начата
        state.error = null;
      })
      .addCase(
        loadProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false; // Загрузка завершена
          const existingIds = state.items.map((product) => product.id);
          const newProducts = action.payload.filter(
            (product) => !existingIds.includes(product.id)
          );
          state.items.push(...newProducts); // Добавляем только уникальные продукты
        }
      )
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false; // Загрузка завершена с ошибкой
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export const { addProduct, deleteProduct, toggleLike } = productSlice.actions;
export default productSlice.reducer;
