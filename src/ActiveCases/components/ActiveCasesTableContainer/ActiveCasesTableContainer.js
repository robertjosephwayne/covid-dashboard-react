import React from 'react';
import { connect } from 'react-redux';
import * as ActiveCasesActions from '../../../redux/ActiveCases/ActiveCases.actions';

function ActiveCasesTableContainer({ fetchActiveCases, activeCasesDaily }) {
  const handleSubmit = () => {
    fetchActiveCases();
  };

  const activeCasesDailyList = activeCasesDaily.map((caseDataDaily) => {
    return (
      <li key={`daily-cases-${caseDataDaily.date}`}>
        Date: {caseDataDaily.date}, Cases: {caseDataDaily.positive}
      </li>
    );
  });

  return (
    <div>
      <button onClick={handleSubmit}>Fetch Active Cases</button>
      <ul>{activeCasesDailyList}</ul>
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
