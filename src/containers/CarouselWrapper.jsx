import React, { Component } from "react";
import CarouselItem from "../components/CarouselItem.jsx";
import Arrow from "../components/Arrow.jsx";
import "../styles/app.css";

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
    this._getNextSlide = this._getNextSlide.bind(this);
    this._getPrevSlide = this._getPrevSlide.bind(this);
  }

  _getNextSlide(evt) {
    evt.preventDefault();

    let items = this.props.children;
    let curIndex = this.state.activeIndex;
    let itemsLength = items.length;

    console.log("Last Index:", curIndex);
    curIndex = (curIndex + 1) % itemsLength;
    console.log("New Index:", curIndex);

    this.setState({
      activeIndex: curIndex
    });
  }

  _getPrevSlide(evt) {
    evt.preventDefault();

    let items = this.props.children;
    let curIndex = this.state.activeIndex;
    let itemsLength = items.length;

    console.log("Last Index:", curIndex);
    curIndex = ((curIndex - 1) % itemsLength + itemsLength) % itemsLength;
    console.log("New Index:", curIndex);

    this.setState({
      activeIndex: curIndex
    });
  }

  render() {
    let typeOfCarousel = `carousel-${this.props.page}`;
    let typeOfInnerCarousel = `inner-carousel-${this.props.page}`;
    return (
      <div className={typeOfCarousel}>
        <Arrow direction={"left"} onClick={this._getPrevSlide} />
        <ul className={typeOfInnerCarousel}>
          {this.props.children.map((child, index) => (
            <CarouselItem
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              child={child}
            />
          ))}
        </ul>
        <Arrow direction={"right"} onClick={this._getNextSlide} />
      </div>
    );
  }
}
