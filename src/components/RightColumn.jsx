import SalesItem from './SalesItem';
import ScoreList from './ScoreList';
import WebAnalitics from './WebAnalitics';

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesItem />
      <WebAnalitics />
      <ScoreList />
    </div>
  );
};

export default RightColumn;
