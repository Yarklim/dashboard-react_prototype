import { Card, List, ListItem, Title } from '@tremor/react';
import { citiesData } from '../data/citiesData';

const ScoreList = () => {
  return (
    <Card className="max-w-full">
      <Title>Hometowns</Title>
      <List>
        {citiesData?.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ScoreList;
