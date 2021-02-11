import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as ActiveCasesActions from '../../redux/ActiveCases/ActiveCases.actions';
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Text,
} from 'recharts';

function DailyChartsContainer({ fetchActiveCases, activeCasesDaily }) {
  const [chartTitle, setChartTitle] = useState('');
  const [chartDataKey, setChartDataKey] = useState('');

  useEffect(() => {
    console.log('useEffect: fetching active cases');
    fetchActiveCases();
    changeData('Positive Cases', 'positive');
  }, [fetchActiveCases]);

  const formatDate = (date) => date.toLocaleDateString();

  const formatTooltipNumber = (number) =>
    Intl.NumberFormat('en').format(number);

  const formatTooltip = (value, name, props) => {
    return formatTooltipNumber(value);
  };

  const changeData = (title, dataKey) => {
    setChartTitle(title);
    setChartDataKey(dataKey);
  };

  const data = React.useMemo(
    () =>
      activeCasesDaily.map((caseDataDaily) => ({
        date: formatDate(caseDataDaily.date),
        year: caseDataDaily.year,
        month: caseDataDaily.month,
        day: caseDataDaily.day,
        positive: caseDataDaily.positive,
        negative: caseDataDaily.negative,
        pending: caseDataDaily.pending,
        hospitalized: caseDataDaily.hospitalizedCurrently,
        inIcuCurrently: caseDataDaily.inIcuCurrently,
        onVentilatorCurrently: caseDataDaily.onVentilatorCurrently,
        death: caseDataDaily.death,
        totalTestResults: caseDataDaily.totalTestResults,
        positiveIncrease: caseDataDaily.positiveIncrease,
        deathIncrease: caseDataDaily.deathIncrease,
        hospitalizedIncrease: caseDataDaily.hospitalizedIncrease,
        totalTestResultsIncrease: caseDataDaily.totalTestResultsIncrease,
      })),
    [activeCasesDaily],
  );

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex items-center my-4 mb-4 space-x-4">
        <button
          className="focus:outline-none"
          onClick={() => changeData('Total Test Results', 'totalTestResults')}>
          Tests
        </button>
        <button
          className="focus:outline-none"
          onClick={() => changeData('Positive Cases', 'positive')}>
          Positive
        </button>
        <button
          className="focus:outline-none"
          onClick={() => changeData('Negative Cases', 'negative')}>
          Negative
        </button>
        <button
          className="focus:outline-none"
          onClick={() => changeData('Pending Tests', 'pending')}>
          Pending
        </button>
        <button
          className="focus:outline-none"
          onClick={() => changeData('Currently in ICU', 'inIcuCurrently')}>
          ICU
        </button>
        <button
          className="focus:outline-none"
          onClick={() => changeData('Hospitalized', 'hospitalized')}>
          Hospitalized
        </button>
        <button
          className="focus:outline-none"
          onClick={() =>
            changeData('Currently on Ventilator', 'onVentilatorCurrently')
          }>
          Ventilators
        </button>
        <button
          className="focus:outline-none"
          onClick={() => changeData('Deaths', 'death')}>
          Deaths
        </button>
      </div>
      <div className="flex items-center mb-4 space-x-4">
        <button
          className="focus:outline-none"
          onClick={() => changeData('Positive Increase', 'positiveIncrease')}>
          Positive Increase
        </button>
        <button
          className="focus:outline-none"
          onClick={() => changeData('Death Increase', 'deathIncrease')}>
          Death Increase
        </button>
        <button
          className="focus:outline-none"
          onClick={() =>
            changeData('Hospitalized Increase', 'hospitalizedIncrease')
          }>
          Hospitalized Increase
        </button>
        <button
          className="focus:outline-none"
          onClick={() =>
            changeData(
              'Total Test Results Increase',
              'totalTestResultsIncrease',
            )
          }>
          Test Increase
        </button>
      </div>
      <h1 className="text-xl font-bold text-center">{chartTitle}</h1>
      <ResponsiveContainer width="80%" height="80%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey={chartDataKey}
            stroke="#8884d8"
            dot={false}
          />
          <XAxis dataKey="date" />
          <Tooltip formatter={formatTooltip} />
        </LineChart>
      </ResponsiveContainer>
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
)(DailyChartsContainer);
