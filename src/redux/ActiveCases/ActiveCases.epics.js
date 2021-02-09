import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import * as ActiveCasesActions from './ActiveCases.actions';

export const fetchActiveCasesEpic = (action$) =>
  action$.pipe(
    ofType(ActiveCasesActions.fetchActiveCases),
    mergeMap((action) =>
      ajax('https://covid-dashboard-api-nest.herokuapp.com/active-cases').pipe(
        map((response) => {
          const activeCasesDaily = getActiveCasesDaily(response);
          return ActiveCasesActions.fetchActiveCasesSuccess({
            activeCasesDaily,
          });
        }),
      ),
    ),
  );

const getActiveCasesDaily = (response) => response.response;
