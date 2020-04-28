import React from 'react';
import Typography from '../shared/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
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
        width:'50%',
        height:'50%',
        marginBottom: '5%',
    }
}))

const NotFound = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} align="center">
            <Box className={classes.imageWrapper}>
                <Image src="https://media1.tenor.com/images/224c79aca31d3651daf0e54ac7b3caa5/tenor.gif?itemid=5239998" />
            </Box>
            <Typography variant="h3" color="primary">Oh no!</Typography>
            <Typography variant ="body2">It seems like you wandered 
                off to a page that does not exist</Typography>
            <Typography variant ="body2" paragraph>Don't worry we are here to help</Typography>
            <Grid container direction="row">
                <Grid item xs={12} sm={6}>
                    <Link to="/" component={RouterLink}><Typography variant="subtitle1" color="primary">Back to Home</Typography></Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Link to={{pathname:"/ProductList", state:{
                            pCategory:'ages 3 and up'
                        }
                    }} component={RouterLink} > <Typography variant="subtitle1" color="primary">Why don't you check out our extensive catalog?</Typography></Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default NotFound;