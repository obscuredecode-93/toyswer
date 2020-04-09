import './Header.css';
import React from 'react';
import { connect } from 'react-redux';
import AppBar from '../shared/AppBar';
import Typography from '../shared/Typography';
import clsx from 'clsx';
import Toolbar,{ styles as toolbarStyles} from '../shared/Toolbar';
import { InputAdornment,TextField,Link,IconButton,Drawer, Divider, CssBaseline} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { logoutUser } from '../actions';


const drawerWidth = 200;


const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  drawerBody: {
    display:'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
    icon:{
        marginRight: theme.spacing(2),
        color: theme.palette.grey
    },
    searchInputInside:{
        color: "inherit" 
    },
    searchInput:{
        margin: theme.spacing(1)

    },
    alignCenter:{
        paddingTop:'10px',
        paddingLeft: '8px'
    },
    title: {
        fontSize: 24,
      },
    placeholder: toolbarStyles(theme).root,
      toolbar: {
        justifyContent: 'space-between',
      },
      left: {
        flex: 1,
        display:'flex',
        flexDirection:'row'
      },
      leftLinkActive: {
        color: theme.palette.common.white,
      },
      right: {
        flex: 1,
        float:'right',
        display: 'flex',
        justifyContent: 'flex-end',
      },
      burgerButton:{
        float:'right',
      },
      rightLink: {
        fontSize: 17,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
      },
      linkSecondary: {
        color: theme.palette.secondary.main,
      },
}))

const Header = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    console.log(props);
    const { loginError, isAuthenticated,user } = props;
    console.log(user);
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
    let loggedOutJSX = (
    <React.Fragment>
      <Link
      color="inherit"
      variant="h6"
      underline="none"
      className={classes.alignCenter}
      href="/signIn"
      >
        {'Sign In'}
      </Link>
      <Link
      variant="h6"
      underline="none"
      className={clsx(classes.linkSecondary,classes.alignCenter)}
      href="/signUp"
      >
        {'Sign Up'}
      </Link>
    </React.Fragment>);
    let logOut = () => {
      const { dispatch } = props;
      dispatch(logoutUser());
    }
    let loggedInJSX = (
      <React.Fragment>
        <Link
        variant="h6"
        underline="none"
        className={clsx(classes.linkSecondary,classes.alignCenter)}
        onClick={logOut}
      >
        {'Sign Out'}
      </Link>
      </React.Fragment>
    );
    
    return (
        <AppBar position="fixed" classes={clsx( classes.appBar, {
          [classes.appBarShift]: open
        })}>         
            <Toolbar color="primary" className={classes.toolbar}>
                <div className={classes.left}>
                    <ChildCareIcon className={classes.icon} fontSize="large" />
                    <Typography color="inherit" variant="h5">ToysRWe</Typography>
                </div>
                 <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon className={classes.burgerButton} />
                </IconButton>
                <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
                >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <div className={classes.drawerBody}>               
                <TextField 
                id="filled-basic"
                borderRadius="50%"
                color="inherit"
                placeholder="Enter Search"
                className={classes.searchInput}
                InputProps ={{
                    className: classes.searchInputInside,
                    endAdornment:(
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} 
                />
                { isAuthenticated ? loggedInJSX: loggedOutJSX}
                </div>
              </Drawer> 
            </Toolbar>
        </AppBar>
    );
}
function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(Header);