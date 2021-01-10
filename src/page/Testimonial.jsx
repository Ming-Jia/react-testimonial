import React, { Component } from 'react';
import './TestimonialStyles.scss';

import { DATA } from '../backend';

import Card from '../component/Card';

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      data: DATA,
      maxLength: DATA.length,
      curIndex: 0,
    });
  }

  // Helper function for prevBtnPressed & nextBtnPressed
  updateIndex = (isAdd, curIndex, maxLength) => {
    isAdd ? curIndex++ : curIndex--;

    if (curIndex >= maxLength) {
      curIndex = 0;
    } else if (curIndex < 0) {
      curIndex = maxLength - 1;
    }

    return curIndex;
  };

  prevBtnPressed = () => {
    let { curIndex, maxLength } = this.state;

    curIndex = this.updateIndex(false, curIndex, maxLength);

    this.setState({
      curIndex,
    });
  };

  nextBtnPressed = () => {
    let { curIndex, maxLength } = this.state;

    curIndex = this.updateIndex(true, curIndex, maxLength);

    this.setState({
      curIndex,
    });
  };

  randomBtnPressed = () => {
    let { curIndex } = this.state;

    // Ensure new index do not replicate the old one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * 3 + 1);
    } while (newIndex == curIndex);

    this.setState({
      curIndex: newIndex,
    });
  };

  render() {
    const { data, curIndex } = this.state;

    return (
      <div className="container">
        <h1>Our Reviews</h1>
        <div className="horizontal-line"></div>
        <Card
          onPrev={this.prevBtnPressed}
          onNext={this.nextBtnPressed}
          onRandom={this.randomBtnPressed}
          data={data[curIndex]}
          index={curIndex}
        />
      </div>
    );
  }
}

export default Testimonial;
