import withRoot from '../withRoot';
import React from 'react';

import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import {Container,Box, Grid, Divider} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
            <Typography variant="h4" align="left" >About Us</Typography>
            <Box className={classes.bannerImage}>
                <Image src={CompanyLogo}  />
            </Box>
            <Typography variant="body2" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec in lectus dignissim, ornare purus in, laoreet nisl. Maecenas nisi lorem,
            rutrum nec elit ac, viverra tincidunt lorem. 
            Ut sagittis ac libero eget ornare. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Vivamus efficitur maximus mi, 
            a aliquet lectus ultrices nec. Nam sagittis tempus hendrerit. Suspendisse potenti. Curabitur a risus bibendum, sollicitudin purus sit amet, pharetra sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum egestas, lorem in condimentum gravida, dolor dolor pharetra leo, vel volutpat lacus libero at urna. Curabitur semper ultricies lacus, vitae mattis ligula blandit eget. Nunc sit amet erat non nunc commodo vehicula. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Typography>

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
                                    BOL TU EK NUMBER CHA CHUTIYA AAHES
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
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
                                        Ek Number cha chutiya aahes
                                        Ek Number cha chutiya aahes
                                        Ek Number cha chutiya aahes
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
                                    BOL TU PAKKA MADARCHOD AAHES
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
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
                                        Pakka Madarchod Aahe
                                        Pakka Madarchod Aahe
                                        Pakka Madarchod Aahe
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
                                    TONDAT GHEUN CHOK MAJA
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
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
                                        ASHRAF ALI!
                                        ASHRAF ALI!
                                        ASHRAF ALI!
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
                                            src="https://media-exp1.licdn.com/dms/image/C4E03AQGbgbWi_Qkiuw/profile-displayphoto-shrink_800_800/0?e=1593648000&v=beta&t=KFaHi_gO5Enwojx4G2O6xkqoqgPVBkU2cYpV1QG2V84"
                                        />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h6">Anurag Lakshminarayan</Typography>
                                    </Grid>    
                                </Grid>
                                <Divider />
                                <Typography variant="body1">
                                    TU BASLAYS LAVDYA WAR!
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
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
                                        TU BASLAYS LAVDYA WAR!
                                        TU BASLAYS LAVDYA WAR!
                                        Majha papa cha lavdya war!
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