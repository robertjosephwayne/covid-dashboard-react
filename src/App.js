import './App.css';
import ActiveCasesTableContainer from './components/ActiveCasesTable/ActiveCasesTableContainer';
import DailyChartsContainer from './components/DailyCharts/DailyChartsContainer';
import TopAppBar from './components/TopAppBar/TopAppBar';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <TopAppBar title="Covid Dashboard" />
        <div className="flex-grow my-12">
          <DailyChartsContainer />
        </div>
      </div>
    </>
  );
}

export default App;
