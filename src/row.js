import React, { PureComponent } from "react";
import { Cell } from "./cell";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { ViewOnlyCell } from "./view-only-cell";

export class Row extends PureComponent {
  render() {
    const {
      valuerefference,
      posValue,
      aspValue,
      type,
      editable,
      readonly,
      handleChangedCell
    } = this.props;
    return (
      <TableRow key={valuerefference}>
        <TableCell component="th" scope="row" key="10">
          {valuerefference}
        </TableCell>
        <TableCell align="right" key="11">
          <ViewOnlyCell value={posValue} type={type} />
        </TableCell>
        <TableCell align="right" key="12">
          <Cell
            key={`${valuerefference}`}
            value={aspValue}
            valuerefference={valuerefference}
            type={type}
            disabled={!editable || readonly}
            onValueChange={handleChangedCell}
          />
        </TableCell>
      </TableRow>
    );
  }
}
