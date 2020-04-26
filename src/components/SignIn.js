import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "../shared/Typography";
import AppForm from "./form/AppForm";
import { email, required } from "./form/validation";
import RFTextField from "./form/RFTextField";
import FormButton from "./form/FormButton";
import FormFeedback from "./form/FormFeedback";
import Snackbar from "../shared/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const { loginError, isAuthenticated, error } = props;
  //console.log(props);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    const validate = (values) => {
      const errors = required(["email", "password"], values);

      if (!errors.email) {
        const emailError = email(values.email, values);
        if (emailError) {
          errors.email = email(values.email, values);
        }
      }

      return errors;
    };

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    const onSubmit = async (values) => {
      const { dispatch } = props;
      const { email, password } = values;
      dispatch(loginUser(email, password));
    };

    console.log(props);
    return (
      <React.Fragment>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            { error }
          </Alert>
        </Snackbar>
        <AppForm>
          <React.Fragment>
            <Typography
              variant="h3"
              gutterBottom
              marked="center"
              align="center"
            >
              Sign In
            </Typography>
            <Typography variant="body2" align="center">
              {"Not a member yet? "}
              <Link href="/signUp" align="center" underline="always">
                Sign Up here
              </Link>
            </Typography>
          </React.Fragment>
          <Form
            onSubmit={onSubmit}
            subscription={{ submitting: true }}
            validate={validate}
          >
            {({ handleSubmit, submitting,form }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                {console.log(form)}
                <Field
                  autoComplete="email"
                  autoFocus
                  component={RFTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                  size="large"
                />
                <Field
                  fullWidth
                  size="large"
                  component={RFTextField}
                  disabled={submitting || sent}
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>
                <FormButton
                  className={classes.button}
                  disabled={submitting || sent}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {submitting || sent ? "In progress…" : "Sign In"}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
    userShort: state.auth.userShort,
    error: state.auth.error
  };
}

export default connect(mapStateToProps)(withRoot(SignIn));
