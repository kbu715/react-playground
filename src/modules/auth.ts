import { ActionType, createAction, createReducer } from 'typesafe-actions';
import { FormType } from '../components/Blog/auth/AuthForm';
// type FormType = 'login' | 'register';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

type AuthState = {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
};

export const changeField =
  createAction(CHANGE_FIELD)<{ form: FormType; key: string; value: string }>();

export const initializeForm = createAction(INITIALIZE_FORM)<FormType>(); // register or login

const initialState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const actions = { changeField, initializeForm };

type AuthAction = ActionType<typeof actions>;

const authReducer = createReducer<AuthState, AuthAction>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
    ...state,
    [form]: {
      ...state[form],
      [key]: value,
    },
  }),
  [INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initialState[form], // reset
  }),
});

export default authReducer;
