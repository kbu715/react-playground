import { call, put } from 'redux-saga/effects';
import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';

/*
  유틸함수의 재사용성을 높이기 위하여 함수의 파라미터는 언제나 하나의 값을 사용하도록 하고,
  action.payload 를 그대로 파라미터로 넣어주도록 설정합니다.
  만약에 여러가지 종류의 값을 파라미터로 넣어야 한다면 객체 형태로 만들어줘야 합니다.
*/
type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

// action 이 payload 를 갖고 있는지 확인합니다.
// __ is __ 문법은 Type guard 라고 부릅니다 https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-type-assertions
function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
  return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    // [액션타입 , 페이로드타입] or [액션타입 [페이로드타입,메타타입]]
    [T1, [P1, undefined]],
    [T2, [P2, undefined]],
    [T3, [P3, undefined]]
  >,
  promiseCreator: PromiseCreatorFunction<P1, P2>
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      const result = isPayloadAction<P1>(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActionCreator.success(result));
    } catch (e) {
      yield put(asyncActionCreator.failure(e));
    }
  };
}

/*
모든 상황에 사용 할 수는 없겠지만 단순히 복잡한 로직없이 API 요청만 해서 결과값을 받아와야 하는 경우에는 쉽게 saga 를 만들 수 있기 때문에 생산성에 큰 도움을 줄 수 있습니다.
*/
