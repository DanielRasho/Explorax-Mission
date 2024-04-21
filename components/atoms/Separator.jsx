import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

export default function Separator({ width, height }) {
  return <View style={{ width, height }} />;
}

Separator.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Separator.defaultProps = {
  width: 0,
  height: 0,
};
