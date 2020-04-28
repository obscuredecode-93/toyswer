import withRoot from '../withRoot';
import React from 'react';

import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import {Container,Box, Grid, Divider} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Anurag from '../Images/Anurag.jpeg';
import Husain from '../Images/Husain.jpeg';
import Rakesh from '../Images/Rakesh.jpeg';
import Sagar from '../Images/Sagar.jpeg';


import Typography from '../shared/Typography';
import CompanyLogo from '../Images/CompanyLogo.png';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop:'15%',
    },
    bannerImage:{
        maxWidth:'31%',
        maxHeight:'31%',
        paddingBottom: theme.spacing(3),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      cardRoot:{},
      avatarImageWrapper:{
          width:'50%',
          height:'50%',
          marginBottom: '5%',
      },
      avatarImage:{
        borderRadius:'50%',
      },
      photoGrid:{
          marginBottom:'10%',
      }, 
      imgWrapper:{
          width:'90%',
      }
}));


const AboutUs = () => {
    const classes = useStyles();
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    
    
    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };
    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };
    return(
        <Container className={classes.root}>
            <Typography variant="h2" color="primary">Meet our Team!</Typography>
            <Grid container spacing={5} direction="row" className={classes.photoGrid}>
                <Grid xs={12} sm={3} item >
                    <Box className={classes.imgWrapper}>
                        <Image src={Husain} />
                        <Typography variant="subtitle2" color="primary" align="center">Husain Ali</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={3} item>
                    <Box className={classes.imgWrapper}>
                        <Image src={Anurag} />
                        <Typography variant="subtitle2" color="primary" align="center">Anurag</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={3} item>
                    <Box className={classes.imgWrapper}>
                        <Image src={Rakesh} />
                        <Typography variant="subtitle2" color="primary" align="center">Rakesh Roshan</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={3} item>
                    <Box className={classes.imgWrapper}>
                        <Image src={Sagar} />
                        <Typography variant="subtitle2" color="primary" align="center">Sagar Bohra</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="body2">As ToysWeR, we specialize in the production and design of quality toys and consumer
                products. Our products inspire, entertain, and develop children to play. Through our website, we
                market toys, apparel, electronic goods, accessories, and all there is for kids. Our website is a
                multi-platform application apt for both mobile as well as desktop devices. Various design
                principles learned in the course IS Design &amp; Development has been integrated into the website.
                ToysWeR is a toy manufacturing and selling company that was started in 2012. We aren’t a
                legacy yet, but we are making our own new frontiers. We specialize in the production and
                design of quality toys and consumer products. Our products inspire, entertain, and develop
                children to play. Our huge selection of toys for all age groups put smiles on every child’s face.
                We are currently serving over 28,000 customers in 18 cities in the United States and the United
                Kingdom. We started out from a garage, as 4 friends, with the sole objective of design and
                production of quality toys.</Typography>
                <br/>
            <Grid container spacing={3}>
                <Grid item lg={6} md={6} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={4} >
                                        <Box className={classes.avatarImageWrapper}>
                                        <Image align="center" 
                                            alt="Rakesh Roshan"  
                                            className={classes.avatarImage}
                                            src="https://media-exp1.licdn.com/dms/image/C4E03AQGbgbWi_Qkiuw/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=KFaHi_gO5Enwojx4G2O6xkqoqgPVBkU2cYpV1QG2V84"
                                        />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6">Rakesh Roshan</Typography>
                                    </Grid>    
                                </Grid>
                                <Divider />
                                <Typography variant="body1">
                                    Backend bear
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" onClick={(() => window.location.href="")}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded1,
                                })}
                                    onClick={handleExpandClick1}
                                    aria-expanded={expanded1}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        He is very good at Java and Spring
                                        </Typography>   
                                </CardContent>
                            </Collapse>
                        </Card> 
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={4} >
                                        <Box className={classes.avatarImageWrapper}>
                                        <Image align="center" 
                                            alt="Husain Ali"  
                                            className={classes.avatarImage}
                                            src="https://media-exp1.licdn.com/dms/image/C4E03AQEVN-r5fZnKDQ/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=BdqJgaEi0chJKajG4OT_cxClLHsGWOaGmYdnZOHrdzA"
                                        />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6">Husain Ali</Typography>
                                    </Grid>    
                                </Grid>
                                <Divider />
                                <Typography variant="body1">
                                    Testing Tuna
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" onClick={(() => window.location.href="")}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded2,
                                })}
                                    onClick={handleExpandClick2}
                                    aria-expanded={expanded2}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                       Munch those bugs away!
                                    </Typography>   
                                </CardContent>
                            </Collapse>
                        </Card> 
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={4} >
                                        <Box className={classes.avatarImageWrapper}>
                                        <Image align="center" 
                                            alt="Sagar Bohra"  
                                            className={classes.avatarImage}
                                            src="https://media-exp1.licdn.com/dms/image/C4E03AQFQhgedqfAlCg/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=_1enpd1mfqvokn4jRQW9AJWNagLPbp3-mRIjNrMMn5Y"
                                        />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6">Sagar Bohra</Typography>
                                    </Grid>    
                                </Grid>
                                <Divider />
                                <Typography variant="body1">
                                    Data Dog
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" onClick={(() => window.location.href="")}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded3,
                                })}
                                    onClick={handleExpandClick3}
                                    aria-expanded={expanded3}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        Great at R and PySpark
                                    </Typography>   
                                </CardContent>
                            </Collapse>
                        </Card> 
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={4} >
                                        <Box className={classes.avatarImageWrapper}>
                                        <Image align="center" 
                                            alt="Anurag Lakshminarayan"  
                                            className={classes.avatarImage}
                                            src="https://media-exp1.licdn.com/dms/image/C5603AQGwx7rdvNT9Yg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=VRep1mKoUHV5cD-IG50IUUN63hMKURbTL9bqk3HhNPo"
                                        />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6">Anurag Lakshminarayan</Typography>
                                    </Grid>    
                                </Grid>
                                <Divider />
                                <Typography variant="body1">
                                    Frontend Fanatic
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" onClick={(() => window.location.href="")}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded4,
                                })}
                                    onClick={handleExpandClick4}
                                    aria-expanded={expanded4}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded4} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        Great at React and Angular
                                    </Typography>   
                                </CardContent>
                            </Collapse>
                        </Card> 
                    </Grid>
            </Grid>
        </Container>
    );
}

export default withRoot(AboutUs); 