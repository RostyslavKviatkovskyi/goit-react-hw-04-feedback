import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from '../FeedbackOptions/FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, addRate }) => {
  return (
    <Wrapper>
      {/* <Button type="button" onClick={onGood}>
        Good
      </Button>
      <Button type="button" onClick={onNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onBad}>
        Bad
      </Button> */}
      {options.map((element, index) => {
        return (
          <Button key={index} name={element} onClick={addRate}>
            {element}
          </Button>
        );
      })}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};
