import React from 'react';
import Typography from '../shared/Typography';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root:{
        paddingTop:'8%',
        marginBottom: '3%',
    },
    imageWrapper:{
        width:'20%',
        height:'20%',
        marginBottom: '5%',
    }
}))

const NotFound = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} align="center">
            <Box className={classes.imageWrapper}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d4/SadSmiley.gif" />
            </Box>
            <Typography variant="h3">Oh no!</Typography>
            <Typography variant ="body2">It seems like you wandered 
                off to a page that does not exist</Typography>
            <Typography variant ="body2" paragraph>Don't worry we are here to help</Typography>
            <Grid container direction="row">
                <Grid item xs={12} sm={6} sm={6} >
                    <Link to="/">Back to Home</Link>
                </Grid>
                <Grid item xs={12} sm={6} sm={6}>
                    <Link to="/SignUp">Sign Up to our exclusive membership</Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default NotFound;