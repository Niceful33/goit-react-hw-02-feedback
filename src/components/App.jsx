import React from 'react';
import Feedback from './Feedback/Feedback';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <>
        <Feedback state={this.state} />
      </>
    );
  }
}
export default App;
