// import { getUserProfileAsync, GET_USER_PROFILE } from './actions';
// import { getUserProfile, GithubProfile } from '../../lib/api/github';
// import { call, put, takeEvery } from 'redux-saga/effects';
// import { AxiosError } from 'axios';

import { takeEvery } from '@redux-saga/core/effects';
import { getUserProfileAsync, GET_USER_PROFILE } from '.';
import { getUserProfile } from '../../lib/api/github';
import createAsyncSaga from '../../lib/createAsyncSaga';

// function* getUserProfileSaga(
//   // 액션의 타입은 ReturnType 을 통해서 유추해내면 됩니다.
//   action: ReturnType<typeof getUserProfileAsync.request>
// ) {
//   try {
//     // 아직까지는 Generator 를 사용 할 때 yield call 를 통해서 프로미스를 만드는 특정 함수를 호출했을 경우 프로미스의 결과값에 대한 타입을 유추해내지 못합니다.
//     // 때문에 프로미스의 결과값은 force type 을 통해 타입을 지정해주어야 합니다.
//     const userProfile: GithubProfile = yield call(
//       getUserProfile,
//       action.payload
//     );
//     yield put(getUserProfileAsync.success(userProfile));
//   } catch (e) {
//     yield put(getUserProfileAsync.failure(e as AxiosError));
//   }
// }

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
