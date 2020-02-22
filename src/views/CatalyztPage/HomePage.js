import React from 'react';
import Header from "components/Header/Header.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import background1 from '../../assets/img/bg.jpg';
import { func } from 'prop-types';

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.section}>
        {/* <div className={classes.container}> */}
          <header className="App-header" style={{ backgroundImage: `url(${background1})` }}>
            <Header
              brand="Transparent"
              color="transparent"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-twitter"
                        }
                      />{" "}
                      Twitter
                  </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-facebook"
                        }
                      />{" "}
                      Facebook
                  </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink + " " + classes.socialIconsButton
                      }
                    >
                      <i
                        className={
                          classes.socialIcons +
                          " " +
                          classes.marginRight5 +
                          " fab fa-instagram"
                        }
                      />{" "}
                      Instagram
                  </Button>
                  </ListItem>
                </List>
              }
            />
          </header>
          <img src={background1} />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;