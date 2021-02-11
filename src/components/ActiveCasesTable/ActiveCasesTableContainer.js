import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTable } from 'react-table';
import * as ActiveCasesActions from '../../redux/ActiveCases/ActiveCases.actions';

function ActiveCasesTableContainer({ fetchActiveCases, activeCasesDaily }) {
  const handleSubmit = () => {
    fetchActiveCases();
  };

  const data = React.useMemo(
    () =>
      activeCasesDaily.map((caseDataDaily) => ({
        year: caseDataDaily.year,
        month: caseDataDaily.month,
        day: caseDataDaily.day,
        positive: caseDataDaily.positive,
        negative: caseDataDaily.negative,
        pending: caseDataDaily.pending,
        hospitalized: caseDataDaily.hospitalizedCurrently,
        inIcuCurrently: caseDataDaily.inIcuCurrently,
        onVentilatorCurrently: caseDataDaily.onVentilatorCurrently,
        deaths: caseDataDaily.deaths,
        totalTestResults: caseDataDaily.totalTestResults,
        positiveIncrease: caseDataDaily.positiveIncrease,
        deathIncrease: caseDataDaily.deathIncrease,
        hospitalizedIncrease: caseDataDaily.hospitalizedIncrease,
        totalTestResultsIncrease: caseDataDaily.totalTestResultsIncrease,
      })),
    [activeCasesDaily],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        Header: 'Month',
        accessor: 'month',
      },
      {
        Header: 'Day',
        accessor: 'day',
      },
      {
        Header: 'Positive',
        accessor: 'positive',
      },
      {
        Header: 'Negative',
        accessor: 'negative',
      },
      {
        Header: 'Pending',
        accessor: 'pending',
      },
      {
        Header: 'Hospitalized',
        accessor: 'hospitalizedCurrently',
      },
      {
        Header: 'ICU',
        accessor: 'inIcuCurrently',
      },
      {
        Header: 'Ventilator',
        accessor: 'onVentilatorCurrently',
      },
      {
        Header: 'Deaths',
        accessor: 'deaths',
      },
      {
        Header: 'Test Results',
        accessor: 'totalTestResults',
      },
      {
        Header: 'Positive Increase',
        accessor: 'positiveIncrease',
      },
      {
        Header: 'Death Increase',
        accessor: 'deathIncrease',
      },
      {
        Header: 'Hospitalized Increase',
        accessor: 'hospitalizedIncrease',
      },
      {
        Header: 'Test Results Increase',
        accessor: 'totalTestResultsIncrease',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  useEffect(() => {
    console.log('useEffect: fetching active cases');
    fetchActiveCases();
  }, [fetchActiveCases]);

  return (
    <div className="flex flex-col">
      <button onClick={handleSubmit}>Fetch Active Cases</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActiveCases: () => dispatch(ActiveCasesActions.fetchActiveCases()),
  };
};

const mapStateToProps = (state) => {
  return {
    activeCasesDaily: state.activeCases.activeCasesDaily,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveCasesTableContainer);
