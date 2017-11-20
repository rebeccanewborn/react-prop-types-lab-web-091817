// Code Product Component Here
import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    return (
      <div>
        <p />
        {this.props.name}
        <p />
        {this.props.producer}
        <p />
        {this.props.hasWatermark}
        <p />
        {this.props.color}
        <p />
        {this.props.weight}
      </div>
    );
  }
}

let colors = ["white", "eggshell-white", "salmon"];

// let weightCheck = (props, propName, component) => {
//   if (!propName in props) {
//     return new Error(`missing ${propName}`);
//   }
//   if (isNan(props[propName])) {
//     return new Error(`${propName} must be a number`);
//   }
//   if (props[propName] < 80 || props[propName] > 300) {
//     return new Error(`${propName} must be between 80 and 300.`);
//   }
// };

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: (props, propName, component) => {
    if (props[propName] === undefined) {
      return new Error(`missing ${propName}`);
    }
    if (isNaN(props[propName])) {
      return new Error(`${propName} must be a number`);
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error(`${propName} must be between 80 and 300.`);
    }
  }
};

Product.defaultProps = {
  hasWatermark: false
};

export default Product;
