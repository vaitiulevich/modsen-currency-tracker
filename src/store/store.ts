import themesReducer from '@store/reducers/themesReducers';
import { combineReducers, legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
  themes: themesReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
