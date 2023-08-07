import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state) => {
      localStorage.setItem('isLogin', 'yes');
      state.isLogin = true;
    },
    logout: (state) => {
      localStorage.removeItem('isLogin');
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
