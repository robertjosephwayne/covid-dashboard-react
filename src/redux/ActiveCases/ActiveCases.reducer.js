import { createReducer } from '@reduxjs/toolkit';
import * as ActiveCasesActions from './ActiveCases.actions';

const initialState = {
  activeCasesDaily: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(
    ActiveCasesActions.fetchActiveCasesSuccess,
    (state, action) => {
      return {
        ...state,
        activeCasesDaily: action.payload.activeCasesDaily,
      };
    },
  );
});

export default reducer;
