import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../helpers/data.json";

const initialState = data;
// Создание slice (содержит редьюсер и действия)
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Добавьте сюда любые редьюсеры, которые вам нужны
    // Например, для добавления новой книги:
    addBook: (state, action) => {
      state.push(action.payload);
    },
    // Для удаления книги и т.д.
  },
});

export const { addBook } = booksSlice.actions;

// Создание хранилища с нашим редьюсером
export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export default store;
