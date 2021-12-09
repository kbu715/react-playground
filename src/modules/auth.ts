import { AxiosError } from 'axios';
import { ActionType, createAction, createAsyncAction, createReducer } from 'typesafe-actions';
import { FormType } from '../components/Blog/auth/AuthForm';
import { AuthType, login, register } from '../lib/api/auth';
import createAsyncThunk from '../lib/createAsyncThunk';
// type FormType = 'login' | 'register';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

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
  auth: AuthType | null;
  authError: AxiosError | null;
};

export const changeField = createAction(CHANGE_FIELD)<{ form: FormType; key: string; value: string }>();

export const initializeForm = createAction(INITIALIZE_FORM)<FormType>(); // register or login

// thunk 생성
export const registerAsync = createAsyncAction(REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE)<
  AuthType,
  AuthType,
  AxiosError
>();

export const loginAsync = createAsyncAction(LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE)<AuthType, AuthType, AxiosError>();

export const registerThunk = createAsyncThunk(registerAsync, register);
export const loginThunk = createAsyncThunk(loginAsync, login);

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
  auth: null,
  authError: null,
};

const actions = {
  changeField,
  initializeForm,
  registerAsync,
  loginAsync,
};

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
    authError: null,
  }),
  // 회원가입 성공
  [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
    ...state,
    authError: null,
    auth,
  }),
  // 회원가입 실패
  [REGISTER_FAILURE]: (state, { payload: error }) => ({
    ...state,
    authError: error,
  }),
  // 로그인 성공
  [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
    ...state,
    authError: null,
    auth,
  }),
  // 로그인 실패
  [LOGIN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    authError: error,
  }),
});

export default authReducer;
