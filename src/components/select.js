import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class MultipleSelect extends Component {
  handleChange = (type, event) => {
    type === "style"
      ? this.props.onStyleSelect(event.target.value)
      : this.props.onColorSelect(event.target.value);
  };

  render() {
    const { classes, type } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple">{this.props.type}</InputLabel>
        <Select
          multiple
          value={
            type === "style" ? this.props.styleSelect : this.props.colorSelect
          }
          onChange={this.handleChange.bind(this, type)}
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}
        >
          {this.props.names.map((el, idx) => (
            <MenuItem key={idx} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onStyleSelect: props => {
    dispatch({ type: "STYLE_SELECT", payload: props });
  },
  onColorSelect: props => {
    dispatch({ type: "COLOR_SELECT", payload: props });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(MultipleSelect)
);
