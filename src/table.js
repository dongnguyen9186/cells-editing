import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Row } from "./row";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class DailySalesCSVEditTable extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Pos</TableCell>
              <TableCell align="right">CSV</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(this.props.data).map((key, i) => {
              return (
                <Row
                  key={`${key}${i}`}
                  {...this.props.data[key]}
                  editable={this.props.editable}
                  handleChangedCell={this.props.handleChangedCell}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DailySalesCSVEditTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DailySalesCSVEditTable);
