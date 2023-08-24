import { BarList, Card, Title, Bold, Flex, Text } from '@tremor/react';
import { webAnaliticsData } from '../data/webAnaliticsData';

const WebAnalitics = () => {
  return (
    <Card className="max-w-full my-4">
      <Title>Website Analytics</Title>
      <Flex className="mt-4">
        <Text>
          <Bold>Source</Bold>
        </Text>
        <Text>
          <Bold>Visits</Bold>
        </Text>
      </Flex>
      <BarList data={webAnaliticsData} className="mt-2" />
    </Card>
  );
};

export default WebAnalitics;
