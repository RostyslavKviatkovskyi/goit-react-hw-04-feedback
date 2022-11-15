import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from '../FeedbackOptions/FeedbackOptionsStyled';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onGood}>
        Good
      </Button>
      <Button type="button" onClick={onNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onBad}>
        Bad
      </Button>
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};
