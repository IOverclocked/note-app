import React from 'react';
import Button from 'components/atoms/Button/Button';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const Root = () => (
  <MainTemplate>
    <>
      <h1>Hello note</h1>
      <Button width="500px">Close / Save</Button>
      <Button secondary>Remove</Button>
    </>
  </MainTemplate>
);

export default Root;
