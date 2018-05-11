import React, { Component } from "react";
import { Grid, Paper } from "material-ui";
import { withStyles } from "material-ui/styles/index";

const styles = () => ({
  paper: {
    width: 300,
    position: "relative"
  }
});
class Product extends Component {
  state = {
    color: 0,
    price: 0
  };
  handleEvent(e) {
    this.setState({
      color: e.target.getAttribute("class"),
      price: this.props.el.colors.indexOf(e.target.getAttribute("class"))
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <div
            className="product-image"
            style={{
              backgroundImage: `url(img/${this.props.el.model
                .replace(/\s/g, "")
                .toLowerCase()}_${
                this.state.color === 0
                  ? this.props.el.colors[0]
                  : this.state.color
              }.jpg)`
            }}
          />
          <span className="product-name">{this.props.el.model}</span>
          <ul className="colors">
            {this.props.el.colors.map((color, idx) => (
              <li
                key={idx}
                className={`${color}`}
                onClick={this.handleEvent.bind(this)}
              />
            ))}
          </ul>
          <span className="product-price">
            {this.state.color === 0
              ? this.props.el.price[0]
              : this.props.el.price[this.state.price]} $
          </span>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Product);
