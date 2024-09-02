import { TOGGLE_THEME } from '@constants/actionTypes';

export interface ThemeState {
  currentTheme: 'light' | 'dark';
}

const initialState: ThemeState = {
  currentTheme: 'dark',
};

type Action = { type: typeof TOGGLE_THEME };

const themesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default themesReducer;
