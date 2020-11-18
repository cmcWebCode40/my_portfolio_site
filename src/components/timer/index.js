/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import styled from 'styled-components';
// import moment from 'moment';
import Clock from './Clock';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'November 30, 2020',
      newDeadline: ''
    };
  }

  changeDeadline() {
    // eslint-disable-next-line react/destructuring-assignment
    this.setState({ deadline: this.state.newDeadline });
  }

  handleClick() {
    this.changeDeadline();
  }

  render() {
    return (
      <TimeWrapper className="App">
        <Clock deadline={this.state.deadline} />
      </TimeWrapper>
    );
  }
}

const TimeWrapper = styled.section`
`;

export default Timer;
