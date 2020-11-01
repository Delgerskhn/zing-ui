import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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

export const Register = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs>
            <button
              onClick={() => props.showLoginModal()}
              type="submit"
              className="btn btn-nobottomBorder"
            >
              Нэвтрэх
            </button>
          </Grid>
          <Grid item xs>
            <button
               className="btn btn-bottomBorder"
            >
              Бүртгүүлэх
            </button>
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="uname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Нэвтрэх нэр"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="И-мэйл"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Нууц үг"
                name="password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repeatPassword"
                label="Нууц үг давтах"
                type="password"
                id="repeatPassword"
                autoComplete="repeatPassword"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.marginspace}>
            <Grid item xs className={classes.gridStyle}>
              <button
                className="btn btn-primary"
                type="submit"
                style={btnStyle}
              >
                Бүртгүүлэх
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

        </form>
      </div>
    </Container>
  );
};
