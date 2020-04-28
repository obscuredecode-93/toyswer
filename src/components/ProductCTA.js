import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../shared/Typography';
import { Form, Field, FormSpy } from 'react-final-form';
import FormFeedback from './form/FormFeedback';
import { email, required } from "./form/validation";

import TextField from '../shared/TextField';
import Snackbar from '../shared/Snackbar';
import Button from '../shared/Button';
import donationBanner from '../img/donationBanner.jpg';

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    errorText = {meta.touched ? meta.error : ''}
  />
)

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = (values) => {
    console.log(values)
    const errors = required(["donationEmail"], values);
    if (!errors.email) {
      const emailError = email(values.donationEmail, values);
      if (emailError) {
        errors.email = email(values.donationEmail, values);
      }
    }

    console.log(errors)
    return errors;
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <Form onSubmit={handleSubmit}   
            subscription={{ submitting: true }}
            validate={validate}
            >
              {({ handleSubmit,submitting,form }) => (
                <form onSubmit={handleSubmit} className={classes.cardContent}>
                  <Typography variant="h2" component="h2" gutterBottom>
                    Donate now!
                  </Typography>
                  <Typography variant="h5">
                    A small token from you can make a huge difference.
                  </Typography>
                  <Field name="donationEmail" noBorder required validate={email} component={TextFieldAdapter} className={classes.textField} placeholder="Your email" />
                  <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>
                  <Button type="submit" color="primary" variant="contained" className={classes.button}>
                    Sign me up to the mailing list
                  </Button>
                </form>
              )}
            </Form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src={ donationBanner }
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Thank you! You have been added to the mailing list"
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);