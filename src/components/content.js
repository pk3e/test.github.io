import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { connect } from "react-redux";
import Product from "./product";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class GuttersGrid extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            {this.props.goods.map((el, idx) => (
              <Product key={idx} el={el} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const includeColors = includedColors => ({ colors }) =>
  colors.some(color => includedColors.includes(color));

const mapStateToProps = state => {
  const result =
    state.styleSelect.length > 0
      ? {
          ...state,
          goods: state.goods.filter(
            val => state.styleSelect.indexOf(val.style) > -1
          )
        }
      : { ...state };
  return state.colorSelect.length > 0
    ? {
        ...result,
        goods: result.goods.filter(includeColors(state.colorSelect))
      }
    : { ...result };
};
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(GuttersGrid)
);
