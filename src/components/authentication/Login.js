import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    background: "white",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  marginspace: {
    margin: theme.spacing(3, 0, 2),
  },
  gridStyle: {
    width: "100%",
    margin: "auto",
    justifyContent: "center",
  },
}));
const btnStyle = {
  width: "90%",
  marginBottom: "10px",
};
const socialBtn = {
  padding: "5px",
  marginLeft: "0px",
  marginTop: "10px",
  backgroundColor: "#f53b57",
};
export const Login = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs>
            <button className="btn btn-bottomBorder">Нэвтрэх</button>
          </Grid>

          <Grid item xs>
            <button
              onClick={() => props.showRegisterModal()}
              className="btn btn-nobottomBorder"
            >
              Бүртгүүлэх
            </button>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Нэвтрэх нэр эсвэл И-мэйл"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Нууц үг"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Grid container>
            <Grid item xs className={classes.gridStyle}>
              <button
                className="btn btn-primary"
                type="submit"
                style={btnStyle}
                // style={{backgroundColor: "#f53b57"}}
              >
                Нэвтрэх
              </button>
            </Grid>

            <Grid item xs className={classes.gridStyle}>
              <button
                className="btn btn-secondary"
                type="submit"
                style={btnStyle}
                onClick={() => props.closeModal()}
              >
                Буцах
              </button>
            </Grid>
          </Grid>

          <Link href="#" variant="body2">
            Нууц үг мартсан?
          </Link>

          <button
            className="btn btn-primary fullWidth"
            style={socialBtn}
          >
            {/* <i className="fab fa-facebook" style={facebookIcon}></i> */}
            Facebook эрхээр нэвтрэх
          </button>

          <button
            className="btn btn-primary fullWidth"
            style={socialBtn}
          >
            {/* <i className="fab fa-google-plus-g" style={googleIcon}></i> */}
            Google эрхээр нэвтрэх
          </button>
        </form>
      </div>
    </Container>
  );
};
