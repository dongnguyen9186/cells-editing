import { Component } from "react";
//TODO: Using provider instead
export class CanEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: true
    };
  }

  render() {
    return this.props.children(this.state);
  }
}
