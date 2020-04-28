import "./Header.css";
import { useHistory } from 'react-router-dom';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import AppBar from "../shared/AppBar";
import Typography from "../shared/Typography";
import clsx from "clsx";
import Toolbar, { styles as toolbarStyles } from "../shared/Toolbar";
import {
  InputAdornment,
  TextField,
  IconButton,
  Drawer,
  Divider,
  Link
} from "@material-ui/core";
import { Link as RouterLink, withRouter} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { logoutUser } from "../actions";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
  },
  hide: {
    display: "none",
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  drawerBody: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.grey,
  },
  searchInputInside: {
    color: "inherit",
  },
  searchInput: {
    margin: theme.spacing(1),
  },
  alignCenter: {
    paddingTop: "10px",
    paddingLeft: "8px",
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    float: "right",
    display: "flex",
    justifyContent: "flex-end",
  },
  burgerButton: {
    float: "right",
  },
  rightLink: {
    fontSize: 17,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  //const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const {isAuthenticated, user } = props;
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
        component={RouterLink}
        to="/signIn"
      >
        {"Sign In"}
      </Link>
      <Link
        variant="h6"
        underline="none"
        className={clsx(classes.linkSecondary, classes.alignCenter)}
        component={RouterLink}
        to="/signUp"
      >
        {"Sign Up"}
      </Link>
      <Link
        variant="h6"
        underline="none"
        component={RouterLink}
        className={clsx(classes.linkSecondary, classes.alignCenter)}
        to="/aboutUs"
      >
        {"About Us"}
      </Link>
    </React.Fragment>
  );
  let logOut = () => {
    const { dispatch } = props;
    dispatch(logoutUser());
  };
  let [searchTerm, setSearchTerm] = React.useState("");
  const updateSearchTerm = (e) => {
      setSearchTerm(e.target.value);
  }
  const searchItems = (e) => {
    console.log(e.which);
    if(e.which === 13){
      props.history.push({ pathname:'/ProductList', state:{type:'search', searchTerm}})
    }
  }
  let loggedInJSX = (
    <React.Fragment>
      <Link
        variant="h6"
        underline="none"
        className={clsx(classes.linkSecondary, classes.alignCenter)}
        onClick={logOut}
      >
        {"Sign Out"}
      </Link>
      <Link
        variant="h6"
        underline="none"
        component={RouterLink}
        className={clsx(classes.linkSecondary, classes.alignCenter)}
        to="/aboutUs"
      >
        {"About Us"}
      </Link>
    </React.Fragment>
  );

  const history = useHistory();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar color="primary" className={classes.toolbar}>
        <div className={classes.left}>
          <IconButton onClick={() => history.push("/")}>
            <ChildCareIcon className={classes.icon} fontSize="large" />
              <font color = "white">
                <Typography color="inherit" variant="h5">
                  ToysWeR
                </Typography>
              </font>
          </IconButton>
          
        </div>
        { isAuthenticated?<Typography variant="h6" color="inherit"> Hello, {user.firstname} </Typography>:null}
        <Link to="/cart" color="inherit" component={RouterLink} style={{ marginLeft:'3%'}} >
          <ShoppingCartIcon/>
        </Link>
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
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerBody}>
            <TextField
              id="filled-basic"
              color="primary"
              placeholder="Enter Search"
              className={classes.searchInput}
              onKeyPress ={searchItems}
              onChange = {updateSearchTerm}
              InputProps={{
                className: classes.searchInputInside,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {isAuthenticated ? loggedInJSX : loggedOutJSX}
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
function mapStateToProps(state) {
  return {
    user: state.auth.userShort,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}
export default connect(mapStateToProps)(withRouter(Header));
