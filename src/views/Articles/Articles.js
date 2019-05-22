import React from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import Card from 'components/molecules/Card/Card';

const articlesItem = [
  {
    id: 1,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    articleLink: '#',
  },
  {
    id: 2,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    articleLink: '#',
  },
  {
    id: 3,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    articleLink: '#',
  },
  {
    id: 4,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    articleLink: '#',
  },
  {
    id: 5,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
    articleLink: '#',
  },
];

const Articles = () => (
  <PageTemplate pageType="articles">
    {articlesItem.map(({ id, title, date, content, articleLink }) => (
      <Card
        key={id}
        id={id}
        title={title}
        date={date}
        content={content}
        articleLink={articleLink}
        cardType="articles"
      />
    ))}
  </PageTemplate>
);

export default Articles;
