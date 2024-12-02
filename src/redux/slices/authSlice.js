import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POST_AUTH_API_URL , POST_LOGIN_API_URL } from "../utils/apiUrl";
import { postFormRequest, postRequest } from "../utils/requestMethods";

// post thunk function 정의
const postAuthFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (postData, { rejectWithValue }) => {
    // console.log(postData);
    try {
      const options = {
        // body: JSON.stringify(postData), // 표준 JSON 문자열로 변환 json 형식일 때
        method: "POST",
        body: postData, // json 형식이 아닐 때
      };
      const response = await postFormRequest(apiURL, options);
      return response; // { status, data } 형태로 반환
    } catch (error) {
      // 에러 시 상태 코드와 메시지를 포함한 값을 rejectWithValue로 전달
      return rejectWithValue(error);
    }
  });
};

// post_item
export const fetchPostAuthData = postAuthFetchThunk(
  "fetchPostAuth", //action type
  POST_AUTH_API_URL
);

// post thunk function 정의
const postLoginFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (postData, { rejectWithValue }) => {
    // console.log(postData);
    try {
      const options = {
        body: JSON.stringify(postData), // 표준 JSON 문자열로 변환 json 형식일 때
        // method: "POST",
        // body: postData, // json 형식이 아닐 때
      };
      const response = await postRequest(apiURL, options);
      return response; // { status, data } 형태로 반환
    } catch (error) {
      // 에러 시 상태 코드와 메시지를 포함한 값을 rejectWithValue로 전달
      return rejectWithValue(error);
    }
  });
};

// post_item
export const fetchPostLoginData = postLoginFetchThunk(
  "fetchPostLogin", //action type
  POST_LOGIN_API_URL
);


// handleFulfilled 함수 정의 : 요청 성공시 상태 업데이트 로직을 별도의 함수로 정의
const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload; // action.payload에 응답 데이터가 들어있음
};

// handleRejected 함수 정의 : 요청 실패시 상태 업데이트 로직을 별도의 함수로 정의
const handleRejected = (state, action) => {
  // console.log("Error", action.payload);
  state.isError = true;
  state.errorMessage = action.payload?.msg || "Something went wrong"
};

// create slice
const authSlice = createSlice({
  name: "auth", // slice 기능 이름
  initialState: {
    // 초기 상태 지정
    postAuthData: null,
    postLoginData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostAuthData.fulfilled, handleFulfilled("postAuthData")) //요청 성공시
      .addCase(fetchPostAuthData.rejected, handleRejected)
       
      .addCase(fetchPostLoginData.fulfilled, handleFulfilled("postLoginData")) //요청 성공시
      .addCase(fetchPostLoginData.rejected, handleRejected);
  },
}); // slice 객체 저장

export default authSlice.reducer;
