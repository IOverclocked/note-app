import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Note', () => <Card />)
  .add('Article', () => <Card cardType="article" />)
  .add('Twitter', () => <Card cardType="twitter" />);
