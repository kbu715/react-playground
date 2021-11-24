## 타입스크립트에서 리덕스 프로처럼 사용하기

### typesafe-actions로 리팩토링

액션 생성 함수를 매번 직접 만들 필요 없이 `createAction` 을 사용해서 한 줄로 쉽게 작성 할 수 있게 되었습니다.

`createReducer` 는 리듀서를 `switch` 문이 아닌 객체 형태로 작성 할 수 있게 해줍니다. 취향에 따라 다르긴 하겠지만 `switch` 문을 사용하는 것 보다 코드가 훨씬 간결해졌습니다.