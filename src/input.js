import { dataType } from "./fieldDefinitions";
import NumberFormat from "react-number-format";
import React, { PureComponent } from "react";

const currencyCode = "$";

export class Input extends PureComponent {
  render() {
    const { type, ...rest } = this.props;

    switch (type) {
      case dataType.NUMBER:
        return (
          <NumberFormat {...rest} thousandSeparator={true} type={"text"} />
        );
      case dataType.TEXT:
        return <input {...rest} onChange={rest.onValueChange} type="text" />;
      default:
        return (
          <NumberFormat
            {...rest}
            isNumericString={true}
            thousandSeparator={true}
            prefix={currencyCode}
            type={"text"}
          />
        );
    }
  }
}
