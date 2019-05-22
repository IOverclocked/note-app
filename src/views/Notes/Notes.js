import React from 'react';
import ContentPageTemplate from 'templates/ContentPageTemplate/ContentPageTemplate';
import Card from 'components/molecules/Card/Card';

const NotesItem = [
  {
    id: 1,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
  },
  {
    id: 2,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
  },
  {
    id: 3,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
  },
  {
    id: 4,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
  },
  {
    id: 5,
    title: 'Hello note',
    date: '6 days',
    content: 'Lorem ipsum dolor sit ament',
  },
];

const Notes = () => (
  <ContentPageTemplate pageType="notes">
    {NotesItem.map(({ id, title, date, content }) => (
      <Card key={id} id={id} title={title} date={date} content={content} cardType="notes" />
    ))}
  </ContentPageTemplate>
);

export default Notes;
