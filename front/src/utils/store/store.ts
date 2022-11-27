import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type IinitialState = {
  isLogged: boolean;
  token: string;
  role: string;
};

const initialState: IinitialState = {
  isLogged: false,
  token: '',
  role: '',
};

const data = createSlice({
  name: 'park',
  initialState: initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setIsLogged(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
  },
});

export const { setToken, setIsLogged, setRole } = data.actions;

export const createStore = () =>
  configureStore({
    reducer: data.reducer,
  });

export const store = createStore();
