import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../types/types';

interface FormSliceState {
  formList: FormState[];
}

const initialState: FormSliceState = {
  formList: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<FormState>) {
      state.formList.push(action.payload);
    },
  },
});

export const { addFormData } = formSlice.actions;

export default formSlice;
