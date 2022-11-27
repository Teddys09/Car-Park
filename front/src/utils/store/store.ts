import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type IinitialState = {
  isLogged: boolean;
  token: string;
  role: string;
  parks: object[];
};

const initialState: IinitialState = {
  isLogged: false,
  token: '',
  role: '',
  parks: [],
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
    setParks(state, action: PayloadAction<object[]>) {
      state.parks = action.payload;
    },
  },
});

export const { setToken, setIsLogged, setRole, setParks } = data.actions;

export const createStore = () =>
  configureStore({
    reducer: data.reducer,
  });

export const store = createStore();
