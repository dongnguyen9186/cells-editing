import { dataType } from "./fieldDefinitions";
import NumberFormat from "react-number-format";
import React from "react";
const currencyCode = "$";

export const ViewOnlyCell = props => {
  const { type, value } = props;

  const inputProps = {
    displayType: "text",
    value,
    thousandSeparator: true
  };

  if (type === dataType.CURRENCY) {
    inputProps.prefix = currencyCode;
  }

  return <NumberFormat {...inputProps} />;
};
