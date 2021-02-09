import { createAction } from '@reduxjs/toolkit';

export const fetchActiveCases = createAction('ACTIVE_CASES_FETCH');

export const fetchActiveCasesSuccess = createAction(
  'ACTIVE_CASES_FETCH_SUCCESS',
);
