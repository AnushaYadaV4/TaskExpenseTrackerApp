import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import authenticationSlice from './authenticationSlice';
import expensesSlice from './expensesSlice';
import userSlice from '../features/userSlice';
//import statisticsSlice from './statisticsSlice';
//import ToastMiddleware from '../middlewares/ToastMiddleware';

export default configureStore({
  reducer: {
    //authenticationSlice: authenticationSlice,
    expensesSlice: expensesSlice,
    user: userSlice,
    //statisticsSlice: statisticsSlice,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
})
