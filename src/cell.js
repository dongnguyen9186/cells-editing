import React from "react";
import { Input } from "./input";

export class Cell extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  onValueChange = values => {
    this.props.onValueChange(this.props.valuerefference, values.value);
  };

  render() {
    return (
      <div>
        <Input {...this.props} onValueChange={this.onValueChange} />
      </div>
    );
  }
}
