import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Note', () => <Sidebar />)
  .add('Article', () => <Sidebar activeColor="article" />)
  .add('Twitter', () => <Sidebar activeColor="twitter" />);
