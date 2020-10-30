import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  btnStyle: {
    textAlign: "center",
    alignItems: "center",
  },
  socialIcon: {
    iconSize: "10px",
  },
  spanImg: {
    height: "28px",
    width: "28px",
  },
  spanText: {
    padding: "2px",
    margin: "2px",
    textTransform: "none",
  },
  btnSocial: {
    background: "white",
    marginTop: theme.spacing(1),
  },
}));

export const Login = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Нэвтрэх
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              onClick={() => props.showRegisterModal()}
              type="submit"
              fullWidth
              className={classes.submit}
            >
              Бүртгүүлэх
            </Button>
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

          <Button
            variant="contained"
            className={classes.btnSocial}
            type="submit"
            fullWidth
          >
            <img
              className={classes.spanImg}
              alt="..."
              src={require("../../assets/img/icons/common/facebook.svg")}
            />
            <span className={classes.spanText}>Facebook эрхээр нэвтрэх</span>
          </Button>

          <Button
            variant="contained"
            className={classes.btnSocial}
            type="submit"
            fullWidth
          >
            <img
              className={classes.spanImg}
              alt="..."
              src={require("../../assets/img/icons/common/google.svg")}
            />
            <span className={classes.spanText}>Google эрхээр нэвтрэх</span>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Нэвтрэх
          </Button>

          <Link href="#" variant="body2">
            Нууц үг мартсан?
          </Link>
        </form>
      </div>
    </Container>
  );
};
