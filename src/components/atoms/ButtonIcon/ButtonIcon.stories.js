import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import plusIcon from 'assets/plus.svg';
import twitterIcon from 'assets/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.note};
`;

storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Bulb', () => <ButtonIcon icon={bulbIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Twitter', () => <ButtonIcon icon={twitterIcon} />)
  .add('Active', () => <ButtonIcon active icon={twitterIcon} />);
