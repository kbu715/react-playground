import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

export default function createAsyncThunk<
  A extends AnyAsyncActionCreator,
  F extends (...params: any[]) => Promise<any> // 프로미스를 리턴하는 함수형태만 받아올 수 있도록 설정해줍니다.
>(asyncActionCreator: A, promiseCreator: F) {
  // 함수의 파라미터들의 타입을 추론해줍니다.
  // 이를 통하여 F 함수의 파라미터와 thunk 함수의 파라미터가 동일하게끔 설정을 해줄 수 있습니다.
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispatch(request(undefined)); // 파라미터를 비우면 타입 에러가 나기 때문에 undefined 전달
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
      } catch (e) {
        dispatch(failure(e));
      }
    };
  };
}
