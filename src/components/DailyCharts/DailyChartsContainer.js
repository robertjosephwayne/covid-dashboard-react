import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import * as ActiveCasesActions from '../../redux/ActiveCases/ActiveCases.actions';
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import ChartDatePicker from './ChartDatePicker';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[800],
    },
  },
});

function DailyChartsContainer({ fetchActiveCases, activeCasesDaily }) {
  const [chartTitle, setChartTitle] = useState('United States');
  const [startDate, setStartDate] = useState(new Date(2020, 1, 1));
  const [endDate, setEndDate] = useState(new Date(2021, 12, 31));
  const [chartDataKeys, setChartDataKeys] = useState(['positive']);

  const lineColors = [
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#00bcd4',
    '#009688',
    '#8bc34a',
    '#cddc39',
    '#ffc107',
    '#607d8b',
    '#795548',
    '#880e4f',
    '#9e9e9e',
  ];

  useEffect(() => {
    console.log('useEffect: fetching active cases');
    fetchActiveCases();
  }, [fetchActiveCases]);

  useEffect(() => {
    const firstDay = activeCasesDaily[0];
    if (firstDay?.date) {
      setStartDate(firstDay.date);
    }
  }, [activeCasesDaily]);

  useEffect(() => {
    const lastDay = activeCasesDaily[activeCasesDaily.length - 1];
    if (lastDay?.date) {
      setEndDate(lastDay.date);
    }
  }, [activeCasesDaily]);

  const formatDate = (date) => date?.toLocaleDateString() || '';

  const formatTooltipNumber = (number) =>
    Intl.NumberFormat('en').format(number);

  const formatTooltip = (value, name, props) => {
    return formatTooltipNumber(value);
  };

  const changeData = (title, toggledDataKey) => {
    // setChartTitle(title);
    // setChartDataKey(dataKey);
    if (chartDataKeys.includes(toggledDataKey)) {
      const updatedKeys = chartDataKeys.filter(
        (dataKey) => dataKey !== toggledDataKey,
      );
      setChartDataKeys(updatedKeys);
    } else {
      addChartLine(toggledDataKey);
    }
  };

  const addChartLine = (dataKey) => {
    setChartDataKeys([...chartDataKeys, dataKey]);
  };

  const handleStartDateChange = (event) => {
    console.log(event);
    setStartDate(event);
  };

  const handleEndDateChange = (event) => {
    console.log(event);
    setEndDate(event);
  };

  const data = useMemo(() => {
    console.log('test');
    return activeCasesDaily
      .map((caseDataDaily) => ({
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
      }))
      .filter((caseDataDaily) => {
        return (
          new Date(caseDataDaily.date) >= new Date(startDate) &&
          new Date(caseDataDaily.date) <= new Date(endDate)
        );
      });
  }, [activeCasesDaily, startDate, endDate]);

  const renderLines = chartDataKeys.map((chartDataKey, i) => (
    <Line
      key={`line-${chartDataKey}`}
      type="monotone"
      stroke={lineColors[i]}
      dataKey={chartDataKey}
      dot={false}
    />
  ));

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col items-center w-full h-full">
        <h1 className="mb-6 text-xl font-bold text-center">{chartTitle}</h1>
        <ResponsiveContainer width="80%" height={375}>
          <LineChart data={data}>
            {renderLines}
            <XAxis dataKey="date" />
            <Tooltip formatter={formatTooltip} />
          </LineChart>
        </ResponsiveContainer>

        <div className="flex items-center space-x-4">
          <ChartDatePicker
            onChange={handleStartDateChange}
            label="Start Date"
            selectedDate={startDate}
          />
          <ChartDatePicker
            onChange={handleEndDateChange}
            label="End Date"
            selectedDate={endDate}
          />
        </div>

        <div className="flex items-center my-4 mb-4 space-x-4">
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('totalTestResults') && 'font-bold'
            }`}
            onClick={() =>
              changeData('Total Test Results', 'totalTestResults')
            }>
            Tests
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('positive') && 'font-bold'
            }`}
            onClick={() => changeData('Positive Cases', 'positive')}>
            Positive
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('negative') && 'font-bold'
            }`}
            onClick={() => changeData('Negative Cases', 'negative')}>
            Negative
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('pending') && 'font-bold'
            }`}
            onClick={() => changeData('Pending Tests', 'pending')}>
            Pending
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('inIcuCurrently') && 'font-bold'
            }`}
            onClick={() => changeData('Currently in ICU', 'inIcuCurrently')}>
            ICU
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('hospitalized') && 'font-bold'
            }`}
            onClick={() => changeData('Hospitalized', 'hospitalized')}>
            Hospitalized
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('onVentilatorCurrently') && 'font-bold'
            }`}
            onClick={() =>
              changeData('Currently on Ventilator', 'onVentilatorCurrently')
            }>
            Ventilators
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('death') && 'font-bold'
            }`}
            onClick={() => changeData('Deaths', 'death')}>
            Deaths
          </button>
        </div>
        <div className="flex items-center mb-4 space-x-4">
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('positiveIncrease') && 'font-bold'
            }`}
            onClick={() => changeData('Positive Increase', 'positiveIncrease')}>
            Positive Increase
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('deathIncrease') && 'font-bold'
            }`}
            onClick={() => changeData('Death Increase', 'deathIncrease')}>
            Death Increase
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('hospitalizedIncrease') && 'font-bold'
            }`}
            onClick={() =>
              changeData('Hospitalized Increase', 'hospitalizedIncrease')
            }>
            Hospitalized Increase
          </button>
          <button
            className={`focus:outline-none ${
              chartDataKeys.includes('totalTestResultsIncrease') && 'font-bold'
            }`}
            onClick={() =>
              changeData(
                'Total Test Results Increase',
                'totalTestResultsIncrease',
              )
            }>
            Test Increase
          </button>
        </div>
      </div>
    </ThemeProvider>
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
