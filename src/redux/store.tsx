import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../helpers/data.json";

const initialStateBooks = data;
// Создание slice (содержит редьюсер и действия)
const booksSlice = createSlice({
  name: "books",
  initialState: initialStateBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;


const initialStateAudio = {
  currentAudioName: null,
};

const audioSlice = createSlice({
  name: "audio",
  initialState: initialStateAudio,
  reducers: {
    setCurrentAudioName: (state, action) => {
      state.currentAudioName = action.payload; // Измените payload на ожидаемый формат
    },
  },
});

export const { setCurrentAudioName } = audioSlice.actions;




// Создание хранилища с нашим редьюсером
export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    audio: audioSlice.reducer,
  },
});

export default store;