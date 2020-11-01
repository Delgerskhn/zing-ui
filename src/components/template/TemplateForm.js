import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "78%",
    height: "9%",
  },
}));

export const TemplateForm = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h1 className="modalHeader">Border Details</h1>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="bordername"
          label="Border name"
          name="borderName"
          autoComplete="bordername"
          autoFocus
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="domain"
          label="Domain"
          name="domain"
          autoComplete="domain"
          autoFocus
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          id="source"
          label="Source"
          name="source"
          autoComplete="source"
          autoFocus
          className={classes.textField}
        />
        <br />
        {/* <select
          value="category"
          onChange={handleChange}
          className="selectModal"
        >
          <option value="">Categrory</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select><br/> */}
        <button className="btn btn-primary">Add</button>
        <button
          className="btn btn-primary"
          onClick={() => props.handleCloseModal()}
        >
          cancel
        </button>
      </form>
    </div>
  );
};
