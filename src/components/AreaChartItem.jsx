import { AreaChart, Card, Title } from '@tremor/react';
import { chartData } from '../data/chartData';

const dataFormatter = (number) => {
  return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

const AreaChartItem = () => {
  return (
    <Card className="mt-4">
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartData}
        index="date"
        categories={['SemiAnalysis', 'The Pragmatic Engineer']}
        colors={['indigo', 'cyan']}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaChartItem;
