import withRoot from "../withRoot";
// --- Post bootstrap -----
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Field, Form, FormSpy } from "react-final-form";
import Typography from "../shared/Typography";
import AppForm from "./form/AppForm";
import { email, required } from "./form/validation";
import RFTextField from "./form/RFTextField";
import FormButton from "./form/FormButton";
import FormFeedback from "./form/FormFeedback";
import { Redirect, HashRouter } from "react-router-dom";

import { connect } from "react-redux";
import { registerUser } from "../actions";

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

function SignUp(props) {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);
  const { registerError, hasRegistered } = props;
  if (hasRegistered) {
    return <Redirect to="/" />;
  } else {
    const validate = (values) => {
      const errors = required(
        ["firstName", "lastName", "email", "password"],
        values
      );

      if (!errors.email) {
        const emailError = email(values.email, values);
        if (emailError) {
          errors.email = email(values.email, values);
        }
      }

      return errors;
    };

    const onSubmit = async (values) => {
      //window.alert(JSON.stringify(values, 0, 2));
      const { firstName, lastName, email, password } = values;
      const { dispatch } = props;
      const date = new Date();
      const role = "admin";
      dispatch(registerUser(firstName, lastName, email, password, date, role));
      console.log(props);
    };

    return (
      <React.Fragment>
        <AppForm>
          <React.Fragment>
            <Typography
              variant="h3"
              gutterBottom
              marked="center"
              align="center"
            >
              Sign Up
            </Typography>
            <Typography variant="body2" align="center">
              <Link
                href="/premium-themes/onepirate/sign-in/"
                underline="always"
              >
                Already have an account?
              </Link>
            </Typography>
          </React.Fragment>
          <Form
            onSubmit={onSubmit}
            subscription={{ submitting: true }}
            validate={validate}
          >
            {({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={RFTextField}
                      autoComplete="fname"
                      fullWidth
                      label="First name"
                      name="firstName"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="lname"
                      fullWidth
                      label="Last name"
                      name="lastName"
                      required
                    />
                  </Grid>
                </Grid>
                <Field
                  autoComplete="email"
                  component={RFTextField}
                  disabled={submitting || sent}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                />
                <Field
                  fullWidth
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
                  color="secondary"
                  fullWidth
                >
                  {submitting || sent ? "In progress…" : "Sign Up"}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hasRegistered: state.auth.hasRegistered,
    registerError: state.auth.registerError,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(withRoot(SignUp));
