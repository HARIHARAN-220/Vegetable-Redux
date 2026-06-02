import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../REDUX-1/cartSlice';
const store = configureStore({
 reducer: {
 cart: cartReducer,
 },
});
export default store;