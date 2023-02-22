import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onBtnGood, onBtnNeutral, onBtnBad }) => (
  <section>
    <button type="button" onClick={onBtnGood}>
      Good
    </button>
    <button type="button" onClick={onBtnNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onBtnBad}>
      Bad
    </button>
  </section>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onBtnGood: PropTypes.func.isRequired,
  onBtnNeutral: PropTypes.func.isRequired,
  onBtnBad: PropTypes.func.isRequired,
};
