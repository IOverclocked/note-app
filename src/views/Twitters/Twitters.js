import React from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import Card from 'components/molecules/Card/Card';

const twittersItem = [
  {
    id: 1,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    twitterName: 'reactjs',
  },
  {
    id: 2,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    twitterName: 'reactjs',
  },
  {
    id: 3,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    twitterName: 'reactjs',
  },
  {
    id: 4,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    twitterName: 'reactjs',
  },
  {
    id: 5,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    twitterName: 'reactjs',
  },
];

const Twitters = () => (
  <PageTemplate pageType="twitters">
    {twittersItem.map(({ id, title, date, content, twitterName }) => (
      <Card
        key={id}
        id={id}
        title={title}
        date={date}
        content={content}
        twitterName={twitterName}
        cardType="twitters"
      />
    ))}
  </PageTemplate>
);

export default Twitters;
