// src/redux/slices/authSlice.js

import { post } from '@/app/services/apiCall';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


const isAuthenticated = Cookies.get('isAuthenticated') === 'true';

const initialState = {
  isAuthenticated: isAuthenticated,
  user: null,
  loading: false,
  error: null,
  otprRd: false,
  slide: 1,
  modal: false,
  message: "",
};

// 🔁 Send Mobile Number
export const sendMobileNUmber = createAsyncThunk(
  "login/mobile",
  async ({ mobile }, { rejectWithValue }) => {
    try {
      console.log("mobile inside thunk:", mobile); // Debug log
      const response = await post(`webApp/institute/login`, { mobile });
      return response;
    } catch (error) {
      console.error("Login API error:", error);
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);



// 🔐 Verify OTP
export const verifyOtp = createAsyncThunk(
  "verify/otp",
  async ({ mobile, otp }, { rejectWithValue }) => {
    try {
      const response = await post(`webApp/institute/verify`, { mobile, otp });
   
      return response;
    } catch (error) {
      Cookies.remove("isAuthenticated");
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setslide: (state, action) => {
      state.slide = action.payload;
    },
    setmodal: (state, action) => {
      state.modal = action.payload;
    },
    seterrorstate: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMobileNUmber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMobileNUmber.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.slide = 2;
        state.otprRd = true;
      })
      .addCase(sendMobileNUmber.rejected, (state, action) => {
        state.loading = false;
        state.message = "";
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.modal = false;
        state.slide = 1;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { setslide, setmodal, seterrorstate } = authSlice.actions;
export default authSlice.reducer;
