import TopAppBarTitle from './TopAppBarTitle';

const TopAppBar = ({ title }) => {
  return (
    <div className="flex items-center h-16 px-8 py-4 text-lg">
      <TopAppBarTitle title={title}></TopAppBarTitle>
    </div>
  );
};

export default TopAppBar;
