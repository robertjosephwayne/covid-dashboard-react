import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import activeCasesReducer from './ActiveCases/ActiveCases.reducer';
import { fetchActiveCasesEpic } from './ActiveCases/ActiveCases.epics';

const epics = [fetchActiveCasesEpic];

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );

export const rootReducer = combineReducers({
  activeCases: activeCasesReducer,
});
