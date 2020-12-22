import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  image: {
    marginRight: '20px'
  }
}));

export default function AlignItemsList({ items }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {items.map((item, i) => (
        <a key={i} href={item.url}>
          <ListItem alignItems="flex-start">
            <img src={item.urlToImage} className={classes.image} width="200" />
            <ListItemText
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {item.author}
                  </Typography>
                  {item.description}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </a>
      ))}
    </List>
  );
}
