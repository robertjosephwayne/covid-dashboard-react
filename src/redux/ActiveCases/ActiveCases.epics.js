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

const getActiveCasesDaily = (response) => {
  return response.response.map((dailyData) => {
    const date = dailyData.date.toString();
    const year = +date.slice(0, 4);
    const month = +date.slice(4, 6);
    const day = +date.slice(6, 8);
    return {
      ...dailyData,
      year,
      month,
      day,
      date: new Date(year, month, day),
    };
  });
};
